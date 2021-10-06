import DeviceDataForm from "./DeviceDataForm";
import { useState } from "react";

const NewDeviceContainer = () => {
    const [addDataForm, setAddDataForm] = useState([0]);
    let index = 0;

    const addDeviceDataForm = (e) => {
        e.preventDefault();
        
        index++;
        console.log('ereh');
        setAddDataForm([...addDataForm, index]);
    };

    const displayDataForms = addDataForm.map((val) => {
        index++;
        return (
            <DeviceDataForm key={ index } />
        );
    });

    return (
        <div className='Group-Page-Containers'>
            <form onSubmit={addDeviceDataForm}>
                <label>Device Name</label>
                <input placeholder='e.g. Tempt and Humidity Meter'></input>
                {displayDataForms}
                <input type='submit' className='Group-Page-Device-btn' value='Add a sensor'/>
            </form>
            <form>
                <input type='submit' className='Group-Page-Device-btn' value='Add device'/>
            </form>
        </div>
    );
};

export default NewDeviceContainer;