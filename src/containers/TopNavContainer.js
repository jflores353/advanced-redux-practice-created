import { connect } from 'react-redux';
import TopNav from "../components/TopNav";

const mapStateToProps = (state) => {
    return {
        name : state.messages.name,
        date : state.messages.date,
        message : state.messages.message
    }
}


let connector = connect(mapStateToProps);
let TopNavContainer = connector(TopNav);
export default TopNavContainer;
