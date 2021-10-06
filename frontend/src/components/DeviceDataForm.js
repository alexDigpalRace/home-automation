const DeviceDataForm = () => {
    return (
        <div>
            <label>Sensor Name</label>
            <input placeholder='e.g. Temperature' /><br/>
            <label>Data type</label>
            <input placeholder='e.g. Celsius' />
        </div>
    );
};

export default DeviceDataForm;