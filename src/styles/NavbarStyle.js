import styled from "styled-components";

const NavbarStyle = {
    NavbarDiv: styled.div`
        width: 100%;
        height: 67px;
        background-color: #C3CFD9;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
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
};

export default NavbarStyle;