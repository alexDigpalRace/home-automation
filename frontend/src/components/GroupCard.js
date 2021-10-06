import { Link } from "react-router-dom";

const GroupCard = ({ name }) => {
    return (
        <Link to='/group' style={{color: 'white'}}>
            {name}
        </Link>
    );
};

export default GroupCard;