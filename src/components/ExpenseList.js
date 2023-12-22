import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    return (
    <table>
        <thead>
            <tr>
                <th>Department</th>
                <th>Allocted Budget</th>
                <th>Increas by 10</th>
                <th>Decrease by 10</th>
                <th>Clear</th>
            </tr>
        </thead>
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