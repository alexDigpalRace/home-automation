import Header from './Header';
import DashboardContainer from './DashboardContainer';
import GroupsContainer from './GroupsContainer';

const Homepage = () => {
    return (
        <>
            <Header title='Welcome Alex'/>
            <DashboardContainer />
            <GroupsContainer/>
        </>
    );
}

export default Homepage