import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Seat from "../components/Seat";

import BookTicketStyle from "../styles/BookTicketStyle";

const BookTicket = () => {
    const [isRequestStart, setIsRequestStart] = useState(false);
    const [seats, setSeats] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    const seatsStatus = [
        { type: "selected", text: "Selecionado" },
        { type: "available", text: "Disponível" },
        { type: "unavailable", text: "Indisponível" },
    ];

    function validateUserName(inputField, seat) {
        const input = inputField.target.value.replace(/[^a-zA-Z ]/g, '');
        let seats = [...selectedSeats];
        let indexOf = seats.indexOf(seat);
        seats[indexOf].userName = input;
        setSelectedSeats(seats);
    }

    function validateUserCpf(inputField, seat) {
        const input = inputField.target.value.replace(/\D/g, '');
        if (input.length < 12 && !Number.isNaN(Number(input))) {
            let seats = [...selectedSeats];
            let indexOf = seats.indexOf(seat);
            seats[indexOf].userCpf = input;
            setSelectedSeats(seats);
        }
    }

    async function getShowtimeSeats() {
        try {
            let req = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
            setSeats(req.data);
        } catch (error) {
            if (error.response.status === 404) navigate("/");
            else navigate(0);
        }
    }

    async function requestTicket() {
        let canProceed = false;
        selectedSeats.forEach(selectedSeat => {
            if (selectedSeat.userName.length >= 3 && selectedSeat.userCpf.length === 11) canProceed = true;
            else canProceed = false;
        });
        if (canProceed) {
            setSeats({});
            let compradores = [...selectedSeats.map(ss => ({idAssento: ss.seatId, nome: ss.userName, cpf: ss.userCpf}))];
            let data = {
                ids: selectedSeats.map(ss => ss.seatId),
                compradores: compradores,
            };
            await axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", data, {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            navigate("/finish", {
                state: {
                    sessionID: id,
                    seatsIDS: selectedSeats.map(ss => ss.seatId),
                    compradores: compradores,
                }
            });
        } else {
            alert("Preencha todos os campos corretamente antes de continuar!");
        }
    }

    useEffect(() => {
        if (id && !Number.isNaN(Number(id))) {
            if (!isRequestStart) {
                getShowtimeSeats();
                setIsRequestStart(true);
            }
        }
    });

    if (id && Number.isNaN(Number(id))) return (<Navigate to="/"></Navigate>);

    return (
        <>
            {JSON.stringify(seats) !== JSON.stringify({}) ? <BookTicketStyle.BookTicketDiv>
                <BookTicketStyle.SelectSeatsText>Selecione o(s) assento(s)</BookTicketStyle.SelectSeatsText>
                <BookTicketStyle.SeatsDiv>
                    {seats.seats.map(seat => <Seat key={seat.id} id={seat.id} seatNumber={seat.name} isAvailable={seat.isAvailable} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}></Seat>)}
                </BookTicketStyle.SeatsDiv>
                <BookTicketStyle.SeatsInfo>
                    {seatsStatus.map(seatStatus => <BookTicketStyle.SeatInfoDiv key={seatStatus.type}>
                        <BookTicketStyle.SeatInfoDot type={seatStatus.type}></BookTicketStyle.SeatInfoDot>
                        <BookTicketStyle.SeatInfoText>{seatStatus.text}</BookTicketStyle.SeatInfoText>
                    </BookTicketStyle.SeatInfoDiv>)}
                </BookTicketStyle.SeatsInfo>
                {selectedSeats.length > 0 ? <BookTicketStyle.ClientInfosDiv>
                    {selectedSeats.map(selectedSeat => <div key={selectedSeat.seatId}>
                        <BookTicketStyle.FielToFillDiv>
                            <BookTicketStyle.FielToFillTitle>Assento {selectedSeat.seatNumber}:</BookTicketStyle.FielToFillTitle>
                            <BookTicketStyle.FielToFillText>Nome do Comprador</BookTicketStyle.FielToFillText>
                            <BookTicketStyle.FielToFillInput placeholder="Nome do Comprador:" value={selectedSeat.userName} onChange={(element) => validateUserName(element, selectedSeat)}></BookTicketStyle.FielToFillInput>
                        </BookTicketStyle.FielToFillDiv>
                        <BookTicketStyle.FielToFillDiv>
                            <BookTicketStyle.FielToFillText>Nome do Comprador</BookTicketStyle.FielToFillText>
                            <BookTicketStyle.FielToFillInput placeholder="Digite seu CPF" value={selectedSeat.userCpf} onChange={(element) => validateUserCpf(element, selectedSeat)}></BookTicketStyle.FielToFillInput>
                        </BookTicketStyle.FielToFillDiv>
                    </div>)}
                    <BookTicketStyle.FormButtonSubmitDiv>
                        <BookTicketStyle.FormButtonSubmit type="submit" onClick={requestTicket}>Reservar assento(s)</BookTicketStyle.FormButtonSubmit>
                    </BookTicketStyle.FormButtonSubmitDiv>
                </BookTicketStyle.ClientInfosDiv> : null}
                <BookTicketStyle.MovieInfosDiv>
                    <BookTicketStyle.MovieImage src={seats.movie.posterURL} alt={seats.movie.title}></BookTicketStyle.MovieImage>
                    <BookTicketStyle.MovieDetailsDiv>
                        <BookTicketStyle.MovieTitle>{seats.movie.title}</BookTicketStyle.MovieTitle>
                        <BookTicketStyle.MovieSessionText>{seats.day.weekday} - {seats.name}</BookTicketStyle.MovieSessionText>
                    </BookTicketStyle.MovieDetailsDiv>
                </BookTicketStyle.MovieInfosDiv>
            </BookTicketStyle.BookTicketDiv> : <BookTicketStyle.LoadingDiv>
                <BookTicketStyle.SpinnerDiv></BookTicketStyle.SpinnerDiv>
            </BookTicketStyle.LoadingDiv>
            }
        </>
    );
};

export default BookTicket;