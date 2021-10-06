import { useState } from 'react';

const AddGroupCard = ({ onClick }) => {
    const [groupName, setGroupName] = useState('');

    const addGroup = () => {
        // check name
        if (groupName === '') {
            alert('form empty...');
            return;
        }

        onClick(groupName);
    };

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Enter name'
                    className='Groups-Name-Form'
                    value={groupName}
                    onChange={
                        (e) => {setGroupName(e.target.value)}
                    }
                />
            </form>
            <button type='button' onClick={addGroup}>Add group</button>
        </div>
    );
};

export default AddGroupCard;