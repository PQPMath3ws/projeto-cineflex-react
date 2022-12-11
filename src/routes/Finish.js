import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import FinishStyle from "../styles/FinishStyle";

const Finish = () => {
    const [isRequestStart, setIsRequestStart] = useState(false);
    const [session, setSession] = useState({});

    const location = useLocation();

    const navigate = useNavigate();

    const { sessionID, seatsIDS, name, cpf } = {...location.state};

    async function getSessionInfos() {
        try {
            let req = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionID}/seats`);
            setSession(req.data);
        } catch (error) {
            if (error.response.status === 404) navigate("/");
            else navigate(0);
        }
    }

    console.log(session);
    console.log(seatsIDS);

    useEffect(() => {
        if (location.state && location.state.sessionID && location.state.seatsIDS && location.state.name && location.state.cpf) {
            if (!isRequestStart) {
                setIsRequestStart(true);
                getSessionInfos();
            }
        }
    });

    if (!location.state) return (<Navigate to="/"></Navigate>);

    return (
        <>
            {JSON.stringify(session) !== JSON.stringify({}) ? <FinishStyle.FinishDiv>
                <FinishStyle.FinishText>Pedido feito com sucesso!</FinishStyle.FinishText>
                <FinishStyle.InfoDiv>
                    <FinishStyle.InfoTitle>Filme e Sessão</FinishStyle.InfoTitle>
                    <FinishStyle.InfoText>{session.movie.title}</FinishStyle.InfoText>
                    <FinishStyle.InfoText>{session.day.date} {session.name}</FinishStyle.InfoText>
                </FinishStyle.InfoDiv>
                <FinishStyle.InfoDiv>
                    <FinishStyle.InfoTitle>Ingressos</FinishStyle.InfoTitle>
                    {session.seats.filter(seat => seatsIDS.includes(seat.id)).map(seat => <FinishStyle.InfoText key={seat.id}>Assento {seat.name}</FinishStyle.InfoText>)}
                </FinishStyle.InfoDiv>
                <FinishStyle.InfoDiv>
                    <FinishStyle.InfoTitle>Comprador</FinishStyle.InfoTitle>
                    <FinishStyle.InfoText>Nome: {name}</FinishStyle.InfoText>
                    <FinishStyle.InfoText>CPF: {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</FinishStyle.InfoText>
                </FinishStyle.InfoDiv>
                <FinishStyle.ReturnButtonDiv>
                    <FinishStyle.ReturnButton onClick={() => navigate("/")}>Voltar para Home</FinishStyle.ReturnButton>
                </FinishStyle.ReturnButtonDiv>
            </FinishStyle.FinishDiv> : <FinishStyle.LoadingDiv>
                    <FinishStyle.SpinnerDiv>
                    </FinishStyle.SpinnerDiv>
                </FinishStyle.LoadingDiv>}
        </>
    );
};

export default Finish;