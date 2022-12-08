import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Movie from "../components/Movie";

import MoviesStyle from "../styles/MoviesStyle";

const Movies = () => {
    const [isRequestStart, setIsRequestStart] = useState(false);
    const [movies, setMovies] = useState([]);

    let navigate = useNavigate();

    async function getMovies() {
        let req = await axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        if (req.status === 200) {
            setMovies(req.data);
        } else {
            navigate(0);
        }
    }

    useEffect(() => {
        if (!isRequestStart) {
            getMovies();
            setIsRequestStart(true);
        }
    });

    return (
        <>
            {movies.length > 0 ? <>
                <MoviesStyle.MoviesTitle>Selecione o filme</MoviesStyle.MoviesTitle>
                <MoviesStyle.MoviesDiv>
                    {movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} image={movie.posterURL}></Movie>)}
                </MoviesStyle.MoviesDiv>
            </> : <MoviesStyle.LoadingDiv>
                <MoviesStyle.SpinnerDiv></MoviesStyle.SpinnerDiv>
                </MoviesStyle.LoadingDiv>
            }
        </>
    );
}

export default Movies;