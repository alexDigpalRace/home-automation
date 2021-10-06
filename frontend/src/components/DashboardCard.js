import DeviceCard from './DeviceCard';
import AddDeviceCard from './AddDeviceCard';
import { useState} from 'react'

const DashboardCard = () => {
    const [deviceAdded, setDeviceAdded] = useState(false);

    const addDashboardDevice = () => {
        setDeviceAdded(true);
    }

    return (
        <div className='Dashboard-Item'>
            {
                deviceAdded ? <DeviceCard /> : <AddDeviceCard onClick={ addDashboardDevice } />
            }
        </div>
    );
    
};

export default DashboardCard;