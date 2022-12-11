import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const BookTicketStyle = {
    LoadingDiv: styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
    SpinnerDiv: styled.div`
        width: 66px;
        height: 66px;
        display: grid;
        animation: ${spinnerKeyframes} 4s infinite;

        &::before, &::after {
            content: "";
            grid-area: 1/1;
            border: 9px solid;
            border-radius: 50%;
            border-color: #e8833a #e8833a #0000 #0000;
            mix-blend-mode: darken;
            animation: ${spinnerKeyframes} 1s infinite linear;
        }

        &::after {
            border-color: #0000 #0000 #dbdcef #dbdcef;
            animation-direction: reverse;
        }
    `,
    BookTicketDiv: styled.div`
        position: fixed;
        top: 67px;
        width: 100%;
        overflow-y: scroll;
        bottom: 140px;
    `,
    SelectSeatsText: styled.p`
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;
    `,
    SeatsDiv: styled.div`
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2%;

        ${this} > div {
            margin-top: 10px;
        }
    `,
    SeatsInfo: styled.div`
        display: flex;
        justify-content: center;
        gap: 10%;
    `,
    SeatInfoDiv: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        gap: 10px;
    `,
    SeatInfoDot: styled.div`
        width: 25px;
        height: 25px;
        background-color: ${props => props.type === "selected" ? "#1AAE9E" : props.type === "available" ? "#C3CFD9" : "#FBE192"};
        border: 1px solid ${props => props.type === "selected" ? "#0E7D71" : props.type === "available" ? "#7B8B99" : "#F7C52B"};
        border-radius: 17px;
    `,
    SeatInfoText: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    `,
    ClientForm: styled.form`
        margin-left: 20px;
        margin-right: 46px;
        margin-top: 40px;
    `,
    FielToFillDiv: styled.div`
        margin-bottom: 40px;
    `,
    FielToFillText: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #293845;
    `,
    FielToFillInput: styled.input`
        margin-top: 20px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 100%;
        height: 51px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #4E5A65;
        padding-left: 10px;
        padding-right: 10px;
    `,
    FormButtonSubmitDiv: styled.div`
        display: flex;
        justify-content: center;
    `,
    FormButtonSubmit: styled.button`
        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        padding: 30px;
        cursor: pointer;

        &:hover {
            background-color: #D77229;
        }
    `,
    MovieInfosDiv: styled.div`
        position: fixed;
        display: flex;
        align-items: center;
        padding-left: 20px;
        bottom: 0px;
        gap: 20px;
        width: 100%;
        height: 117px;
        background-color: #DFE6ED;
        border: 1px solid #9EADBA;
    `,
    MovieImage: styled.img`
        width: 48px;
        height: 72px;
        padding: 8px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    `,
    MovieDetailsDiv: styled.div`
    `,
    MovieTitle: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    `,
    MovieSessionText: styled.div`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
        margin-top: 10px;
    `,
};

export default BookTicketStyle;