import { useNavigate } from "react-router-dom";

import NavbarStyle from "../styles/NavbarStyle";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <NavbarStyle.NavbarDiv>
            <NavbarStyle.NavbarTitle>CineFlex</NavbarStyle.NavbarTitle>
            <NavbarStyle.NavbarBackLinkButton onClick={() => navigate(-1)} data-test="go-home-header-btn"><NavbarStyle.ArrowBackIcon></NavbarStyle.ArrowBackIcon></NavbarStyle.NavbarBackLinkButton>
        </NavbarStyle.NavbarDiv>
    );
}

export default Navbar;