import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {TiDelete} from "react-icons/ti";
const ExpenseItem = (props) => {
    const {dispatch, currency} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        });
    };

    const increaseExpense = (name) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {name, cost: 10}
        });
    };

    // eslint-disable-next-line
    const reduceExpense = (name) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {name, cost: 10}
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick = {event=>increaseExpense(props.name)}>+</button></td>
            <td><TiDelete size="1.5em" onClick = {event=>handleDeleteExpense(props.name)}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;
