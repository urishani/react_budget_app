import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    return (
        <table>
            <tr>
                <th>Department</th>
                <th>Allocted Budget</th>
                <th>Increase</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {expenses.map(expense=> (
                    <ExpenseItem id={expense.id} key={expense.key} 
                        name={expense.name} cost={expense.cost}/>
                ))}
            </tbody>
        </table>
    );
};
export default ExpenseList;