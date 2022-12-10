import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const MoviesStyle = {
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
    MoviesTitle: styled.p`
        margin-top: 20px;
        margin-bottom: 60px;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;
    `,
    MoviesDiv: styled.div`
        margin-top: 20px;
        margin-left: 60px;
        margin-right: 80px;
        display: flex;
        flex-wrap: wrap;
        gap: 10%;

        ${this} > div {
            flex: 45%;
            margin-bottom: 40px;
        }
    `,
};

export default MoviesStyle;