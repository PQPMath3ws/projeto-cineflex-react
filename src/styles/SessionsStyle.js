import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const SessionsStyle = {
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
    SessionsDiv: styled.div`
        position: fixed;
        top: 67px;
        width: 100%;
        overflow-y: scroll;
        bottom: 140px;
    `,
    SessionsText: styled.p`
        margin-top: 30px;
        margin-bottom: 50px;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;
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
    MovieTitle: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: #293845;
    `,
};

export default SessionsStyle;