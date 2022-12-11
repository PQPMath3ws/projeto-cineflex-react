import { useState } from "react";
import SeatStyle from "../styles/SeatStyle";

const Seat = (props) => {
    const [selected, setSelected] = useState(false);

    function removeSeat(seat, seats) {
        let indexOf = seats.indexOf(seat);
        if (indexOf > -1) seats.splice(indexOf, 1);
        setSelected(false);
    }

    function changeSeatState() {
        if (props.isAvailable) {
            let seats = [...props.selectedSeats];
            if (selected) {
                let seat = seats.filter(seatToFilter => seatToFilter.seatId === props.id)[0];
                if (seat.userName.length > 0 || seat.userCpf.length > 0) {
                    if (window.confirm("Deseja realmente remover essa poltrona cadastrada?")) {
                        removeSeat(seat, seats);
                    }
                } else removeSeat(seat, seats);
            } else {
                seats.push({
                    seatId: props.id,
                    seatNumber: props.seatNumber,
                    userName: "",
                    userCpf: ""
                });
                setSelected(true);
            }
            props.setSelectedSeats(seats);
        } else {
            alert("Esse assento está indisponível no momento.");
        }
    }

    return (
        <SeatStyle.SeatDiv isAvailable={props.isAvailable} isSelected={selected} onClick={changeSeatState} data-test="seat">
            <SeatStyle.SeatNumber>{("0" + props.seatNumber).slice(-2)}</SeatStyle.SeatNumber>
        </SeatStyle.SeatDiv>
    );
}

export default Seat;