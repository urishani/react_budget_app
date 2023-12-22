
import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import s from './Budget.module.css';
const Budget = () => {
    const {budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudjet] = useState(budget);
    const handleBudjetChange = (event) => {
        setNewBudjet(event.target.value);
    }
    // const inputStyle = {'padding-left': '20px'}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input className={s.center} type="number" step="10" value={newBudget} onChange={handleBudjetChange}/>
        </div>
    );
};

export default Budget;