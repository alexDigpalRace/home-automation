import Header from './Header';
import NewDeviceContainer from './NewDeviceContainer';
import DeviceContainer from './DeviceContainer';

const GroupPage = ({ groupName }) => {
    return (
        <div>
            <Header title={groupName} />
            <NewDeviceContainer />
            <DeviceContainer />
        </div>
    );
};

export default GroupPage;