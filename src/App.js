import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import './App.css';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div style={{display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-between"}} >
                            <Budget/> <Remaining/> <ExpenseTotal/> <Currency/>
                </div>
                <h2>Allocation</h2>
                <ExpenseList/>
                <h2>Actions</h2>
                <AllocationForm/>
            </div>
        </AppProvider>
    );
};
export default App;
