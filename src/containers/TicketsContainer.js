import { connect } from 'react-redux';
import Tickets from "../components/Tickets";

const mapStateToProps = (state) => {
    return {
        Tickets: state.tickets
    }
}


let connector = connect(mapStateToProps);
let TicketsContainer = connector(Tickets);
export default TicketsContainer;
