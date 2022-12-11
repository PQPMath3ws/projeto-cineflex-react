import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Seat from "../components/Seat";

import BookTicketStyle from "../styles/BookTicketStyle";

const BookTicket = () => {
    const [isRequestStart, setIsRequestStart] = useState(false);
    const [seats, setSeats] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [clientName, setClientName] = useState("");
    const [clientCpf, setClientCpf] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    const seatsStatus = [
        { type: "selected", text: "Selecionado" },
        { type: "available", text: "Disponível" },
        { type: "unavailable", text: "Indisponível" },
    ];

    function validateUserName(inputField) {
        const input = inputField.target.value.replace(/[^a-zA-Z ]/g, '');
        setClientName(input);
    }

    function validateUserCpf(inputField) {
        const input = inputField.target.value.replace(/\D/g, '');
        if (input.length < 12 && !Number.isNaN(Number(input))) setClientCpf(input);
    }

    const fieldsToFill = [
        { name: "client", text: "Nome do Comprador:", placeholder: "Digite seu nome", value: clientName, change: validateUserName },
        { text: "CPF do Comprador:", placeholder: "Digite seu CPF", value: clientCpf, change: validateUserCpf }
    ];

    async function getShowtimeSeats() {
        try {
            let req = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
            setSeats(req.data);
        } catch (error) {
            if (error.response.status === 404) navigate("/");
            else navigate(0);
        }
    }

    async function requestTicket(event) {
        event.preventDefault();
        if (clientCpf.length === 11 && clientName.length >= 3 && selectedSeats.length > 0) {
            setSeats({});
            let data = {
                ids: selectedSeats,
                name: clientName,
                cpf: clientCpf,
            };
            await axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", data, {
                headers: {
                    "Content-Type": "application/json"
                },
            });
            navigate("/finish", {
                state: data
            });
        } else {
            if (selectedSeats.length === 0) alert("Selecione os assentos para continuar.");
            if (clientName.length < 3) alert("Insira um nome válido para continuar.");
            if (clientCpf.length !== 11) alert("Insira um CPF válido para continuar.");
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
                <BookTicketStyle.ClientForm>
                    {fieldsToFill.map(fieldToFill => <BookTicketStyle.FielToFillDiv key={fieldToFill.name + "_field"}>
                        <BookTicketStyle.FielToFillText>{fieldToFill.text}</BookTicketStyle.FielToFillText>
                        <BookTicketStyle.FielToFillInput name={fieldToFill.name} placeholder={fieldToFill.placeholder} value={fieldToFill.value} onChange={fieldToFill.change}></BookTicketStyle.FielToFillInput>
                    </BookTicketStyle.FielToFillDiv>)}
                    <BookTicketStyle.FormButtonSubmitDiv>
                        <BookTicketStyle.FormButtonSubmit type="submit" onClick={requestTicket}>Reservar assento(s)</BookTicketStyle.FormButtonSubmit>
                    </BookTicketStyle.FormButtonSubmitDiv>
                </BookTicketStyle.ClientForm>
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