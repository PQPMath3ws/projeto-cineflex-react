import { useState } from "react";
import SeatStyle from "../styles/SeatStyle";

const Seat = (props) => {
    const [selected, setSelected] = useState(false);

    function changeSeatState() {
        if (props.isAvailable) {
            let seats = [...props.selectedSeats];
            if (selected) {
                let indexOf = seats.indexOf(props.id);
                if (indexOf > -1) seats.splice(indexOf, 1);
                setSelected(false);
            } else {
                seats.push(props.id);
                setSelected(true);
            }
            props.setSelectedSeats(seats);
        }
    }

    return (
        <SeatStyle.SeatDiv isAvailable={props.isAvailable} isSelected={selected} onClick={props.isAvailable ? changeSeatState : undefined}>
            <SeatStyle.SeatNumber>{("0" + props.seatNumber).slice(-2)}</SeatStyle.SeatNumber>
        </SeatStyle.SeatDiv>
    );
}

export default Seat;