import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import Session from "../components/Session";

import SessionsStyle from "../styles/SessionsStyle";

const Sessions = () => {
    const [isRequestStart, setIsRequestStart] = useState(false);
    const [showTimes, setShowTimes] = useState({});

    let navigate = useNavigate();

    const { id } = useParams();

    async function getShowTimes() {
        try {
            let req = await axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
            setShowTimes(req.data);
        } catch (error) {
            if (error.response.status === 404) navigate("/");
            else navigate(0);
        }
    }

    useEffect(() => {
        if (!Number.isNaN(Number(id))) {
            if (!isRequestStart) {
                getShowTimes();
                setIsRequestStart(true);
            }
        }
    });

    if (Number.isNaN(Number(id))) return (<Navigate to="/"></Navigate>);

    return (
        <>
            {JSON.stringify(showTimes) !== JSON.stringify({}) ? <SessionsStyle.SessionsDiv>
                <SessionsStyle.SessionsText>Selecione o horário</SessionsStyle.SessionsText>
                {showTimes.days.map(day => <Session key={day.id} session={day.id} date={day.date} weekday={day.weekday} showtimes={day.showtimes}></Session>)}
                <SessionsStyle.MovieInfosDiv data-test="footer">
                    <SessionsStyle.MovieImage src={showTimes.posterURL} alt={showTimes.title}></SessionsStyle.MovieImage>
                    <SessionsStyle.MovieTitle>{showTimes.title}</SessionsStyle.MovieTitle>
                </SessionsStyle.MovieInfosDiv>
            </SessionsStyle.SessionsDiv> : <SessionsStyle.LoadingDiv>
                    <SessionsStyle.SpinnerDiv></SessionsStyle.SpinnerDiv>
                </SessionsStyle.LoadingDiv>
            }
        </>
    );
};

export default Sessions;