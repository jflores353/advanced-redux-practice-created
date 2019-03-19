import { connect } from 'react-redux';
import Comments from "../components/Comments";

const mapStateToProps = (state) => {
    return {
        newComments: state.newComments
    }
}


let connector = connect(mapStateToProps);
let CommentsContainer = connector(Comments);
export default CommentsContainer;

