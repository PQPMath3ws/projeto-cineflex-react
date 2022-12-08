import MovieStyle from "../styles/MovieStyle";

const Movie = (props) => (
    <MovieStyle.MovieDiv>
        <MovieStyle.MovieLink to={"sessions/" + props.id}>
            <MovieStyle.MovieImage src={props.image} alt={props.title}></MovieStyle.MovieImage>
        </MovieStyle.MovieLink>
    </MovieStyle.MovieDiv>
);

export default Movie;