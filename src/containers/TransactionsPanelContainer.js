import { connect } from 'react-redux';
import TransactionsPanel from "../components/TransactionsPanel";

const mapStateToProps = (state) => {
    return {
        transaction : state.orders.amount
    }
}


let connector = connect(mapStateToProps);
let TransactionsPanelContainer = connector(TransactionsPanel);
export default TransactionsPanelContainer;
