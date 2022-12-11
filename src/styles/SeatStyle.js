import styled from "styled-components";

const SeatStyle = {
    SeatDiv: styled.div`
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
        border: 1px solid ${props => props.isSelected ? "#0E7D71" : props.isAvailable ? "#808F9D" : "#F7C52B"};
        border-radius: 12px;
        cursor: pointer;
    `,
    SeatNumber: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        letter-spacing: 0.04em;
        color: #000000;
    `,
};

export default SeatStyle;