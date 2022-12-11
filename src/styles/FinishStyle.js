import styled, { keyframes } from "styled-components";

const spinnerKeyframes = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

const FinishStyle = {
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
    FinishDiv: styled.div`
        position: fixed;
        top: 67px;
        width: 100%;
        overflow-y: scroll;
        bottom: 0px;
        padding-bottom: 30px;
    `,
    FinishText: styled.p`
        margin-top: 30px;
        margin-bottom: 40px;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #247A6B;
    `,
    InfoDiv: styled.div`
        margin-top: 20px;
        margin-left: 30px;
    `,
    InfoTitle: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 20px;
    `,
    InfoText: styled.p`
        margin-top: 14px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 0.04em;
        color: #293845;
    `,
    ReturnButtonDiv: styled.div`
        display: flex;
        justify-content: center;
        margin-top: 20px;
    `,
    ReturnButton: styled.button`
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
};

export default FinishStyle;