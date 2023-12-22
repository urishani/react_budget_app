import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import './Budget.module.css';

const AllocationForm = (props) => {
     const {dispatch, remaining, currency} = useContext(AppContext);

     const [name, setName] = useState('');
     const [cost, setCost] = useState('');
     const [action, setAction] = useState('');

     const submitEvent= () => {
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  " + currency + remaining);
            setCost("");
            return;
        }
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };
    const handleChange = (event) => {
        let cost = Math.max(0, Math.min(event.target.value, remaining));
        event.target.value = cost; 
        setCost(event.target.value);        
    }

    return (
        <div>
            <div style={{display: "flex", 
                    flexDirection: "row",
                    justifyContent: "space-between"}} >
                <div className='alert alert-secondary' style={{marginLeft: '2rem'}}>
                    <span>Department:&nbsp; 
                    <select className="s.center custom-select" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue>Choose...</option>
                    <option value="Marketing" name="marketing"> Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                    <option value="Admin" name="admin">Admin</option>
                    </select></span>
                </div>
                <div className='alert alert-secondary' style={{marginLeft: '2rem'}}>
                    <span>Allocation:&nbsp;</span>
                    <select className="s.center custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                </div>
                <div className='alert alert-secondary' style={{display: 'flex', marginLeft: '2rem'}}>
                  <span>Amount:&nbsp;</span>
                  <span>{currency}
                  <input
                    required='required'
                    type='number'
                    id='cost'
                    value={cost?cost:0}
                    size='10'
                    className='center'
                    style={{paddingLeft: '0.5rem'}}
                    onChange={handleChange}>
                  </input></span>
                </div>
                <div className='s.center' style={{marginLeft: '2rem'}}>
                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                    Apply
                </button>
                </div>
            </div>
        </div>
    );
}

export default AllocationForm;