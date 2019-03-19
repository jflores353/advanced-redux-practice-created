import { connect } from 'react-redux';
import TasksPanel from "../components/TasksPanel";

const mapStateToProps = (state) => {
    return {
        TasksPanel: state.tasks
    }
}


let connector = connect(mapStateToProps);
let TasksPanelContainer = connector(TasksPanel);
export default TasksPanelContainer;
