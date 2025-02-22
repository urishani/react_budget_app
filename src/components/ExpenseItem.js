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

    const increaseExpense = (name, amount) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: {name, cost: amount}
        });
    };

    // eslint-disable-next-line
    const reduceExpense = (name, amount) => {
        dispatch({
            type: 'RED_EXPENSE',
            payload: {name, cost: amount}
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button 
                style={{backgroundColor:'green', color:'white', marginLeft:'2em'}} 
                onClick = {event=>increaseExpense(props.name, 10)}>+</button></td>
            <td><button 
                style={{backgroundColor:'red', color:'white', marginLeft:'2em'}} 
                onClick = {event=>reduceExpense(props.name, 10)}>-</button></td>
            <td><TiDelete size="1.5em" onClick = {event=>handleDeleteExpense(props.name)}></TiDelete></td>
        </tr>
    )
}

export default ExpenseItem;
