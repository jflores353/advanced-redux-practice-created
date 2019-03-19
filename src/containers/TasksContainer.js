import { connect } from 'react-redux';
import Tasks from "../components/Tasks";

const mapStateToProps = (state) => {
    return {
     tasks: state.newTasks
    }
}


let connector = connect(mapStateToProps);
let TasksContainer = connector(Tasks);
export default TasksContainer;
