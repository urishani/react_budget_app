import {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {currency, dispatch}  = useContext(AppContext);
    // const [newCurrency, setCurrency] = useState(currency);
    const setCurrency = (newCurrency) => {
        dispatch({type: "CHG_CURRENCY", payload: newCurrency});
    }
    return (
        <div className='alert alert-primary'>
            <span>Currency:&nbsp;
                <select className="s.center custom-select" onChange={(event) => setCurrency(event.target.value)}>
                    <option value="$" name="usd">$ Dollar</option>
                    <option selected value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="¥" name="yen">¥ Yen</option>
                    <option value="₪" name="shekel">₪ Shekel</option>
                </select>
            </span>
        </div>
    )
}

export default Currency;
