import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieStyle = {
    MovieDiv: styled.div`
        width: 100%;
    `,
    MovieLink: styled(Link)`
    `,
    MovieImage: styled.img`
        width: 100%;
        padding: 8px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    `
};

export default MovieStyle;