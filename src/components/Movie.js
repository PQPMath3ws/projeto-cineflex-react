import MovieStyle from "../styles/MovieStyle";

const Movie = (props) => (
    <MovieStyle.MovieDiv data-test="movie">
        <MovieStyle.MovieLink to={"sessoes/" + props.id}>
            <MovieStyle.MovieImage src={props.image} alt={props.title}></MovieStyle.MovieImage>
        </MovieStyle.MovieLink>
    </MovieStyle.MovieDiv>
);

export default Movie;