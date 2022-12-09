import SessionStyle from "../styles/SessionStyle";

const Session = (props) => (
    <SessionStyle.SessionDiv>
        <SessionStyle.SessionDataText>{props.weekday} - {props.date}</SessionStyle.SessionDataText>
        <SessionStyle.SessionTimeDiv>
            {props.showtimes.map(showtime => <SessionStyle.SessionTimeLink to="/bookTicket" state={{sessionID: showtime.id}}>{showtime.name}</SessionStyle.SessionTimeLink>)}
        </SessionStyle.SessionTimeDiv>
    </SessionStyle.SessionDiv>
);

export default Session;