import { useState } from "react";
import AddGroupCard from "./AddGroupCard";
import GroupCard from "./GroupCard";

const GroupsCard = () => {
    const [groupAdded, setGroupAdded] = useState(false);
    const [groupName, setGroupName] = useState('');

    const addNewGroup = (name) => {
        setGroupAdded(true);
        setGroupName(name);
    }

    return (
        <div className='Groups-Item'>
            {groupAdded ? <GroupCard name={groupName}/> : <AddGroupCard onClick={ addNewGroup }/>}
        </div>
    );
};

export default GroupsCard;