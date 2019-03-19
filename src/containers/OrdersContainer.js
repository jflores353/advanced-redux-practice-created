import { connect } from 'react-redux';
import Orders from "../components/Orders";

const mapStateToProps = (state) => {
    return {
        orders: state.newOrders
    }
}


let connector = connect(mapStateToProps);
let OrdersContainer = connector(Orders);
export default OrdersContainer;
