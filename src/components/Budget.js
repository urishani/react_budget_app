
import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import s from './Budget.module.css';
const Budget = () => {
    const {budget, currency, expenses} = useContext(AppContext);
    const [newBudget, setNewBudjet] = useState(budget);
    const handleBudjetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => total+= item.cost, 0);
        const v = Math.max(totalExpenses, Math.min(20000, event.target.value));
        setNewBudjet(v);
        event.target.value = v;
    }
    // const inputStyle = {'padding-left': '20px'}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input className={s.center} type="number" step="10" value={newBudget} 
                onChange={handleBudjetChange}/>
        </div>
    );
};

export default Budget;