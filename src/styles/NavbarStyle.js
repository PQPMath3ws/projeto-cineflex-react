import { ArrowLeft } from "@styled-icons/entypo";
import styled from "styled-components";

const NavbarStyle = {
    NavbarDiv: styled.div`
        position: fixed;
        top: 0px;
        width: 100%;
        height: 67px;
        background-color: #C3CFD9;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,
    NavbarTitle: styled.p`
        display: block;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;
        text-transform: uppercase;
    `,
    NavbarBackLinkButton: styled.button`
        margin-left: 20px;
        position: absolute;
        align-self: flex-start;
        text-decoration: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
    `,
    ArrowBackIcon: styled(ArrowLeft)`
        width: 44px;
        color: #101010;
    `,
};

export default NavbarStyle;