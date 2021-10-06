import Header from './Header';
import NewDeviceContainer from './NewDeviceContainer';
import DeviceContainer from './DeviceContainer';

const GroupPage = ({ groupName }) => {
    return (
        <>
            <Header title={groupName} />
            <div className='Group-Page-Containers-Container'>
                <NewDeviceContainer />
                <DeviceContainer />
            </div>
        </>
    );
};

export default GroupPage;