import {useState} from "react";

// TODO fetch device list data from server
// TODO onSubmit for input button

const DeviceContainer = () => {
    const [deviceList, setDeviceList] = useState([{name: 'Wod Clock'}]);

    const listDevices = deviceList.map((val) => {
        return <input type='submit' value={val.name} key={ val.name } className='Group-Page-Device-btn'/>
    });

    return (
        <div className='Group-Page-Containers'>
            <form>
                {listDevices}
            </form>
        </div>
    );
};

export default DeviceContainer;