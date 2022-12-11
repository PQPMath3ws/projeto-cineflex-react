import SessionStyle from "../styles/SessionStyle";

const Session = (props) => (
    <SessionStyle.SessionDiv data-test="movie-day">
        <SessionStyle.SessionDataText>{props.weekday} - {props.date}</SessionStyle.SessionDataText>
        <SessionStyle.SessionTimeDiv>
            {props.showtimes.map(showtime => <SessionStyle.SessionTimeLink key={showtime.id} to={"/bookTicket/" + showtime.id} data-test="showtime">{showtime.name}</SessionStyle.SessionTimeLink>)}
        </SessionStyle.SessionTimeDiv>
    </SessionStyle.SessionDiv>
);

export default Session;