import { Link } from "react-router-dom";
import styled from "styled-components";

const SessionStyle = {
    SessionDiv: styled.div`
        margin-left: 20px;
    `,
    SessionDataText: styled.p`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-top: 30px;
    `,
    SessionTimeDiv: styled.div`
        display: flex;
        margin-top: 30px;
        gap: 14px;
    `,
    SessionTimeLink: styled(Link)`
        text-decoration: none;
        padding: 10px 20px;
        background-color: #E8833A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        border-radius: 3px;

        &:hover {
            background-color: #D77229;
        }
    `,
};

export default SessionStyle;