import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import Searchbar from '../Searchbar/Searchbar';
import UserInfo from '../UserInfo/UserInfo';

const LeftSidebar = ({ location }: { location: 'home' | 'profile' }) => {
	return (
		<div className='left-side-bar'>
			<Searchbar />
			{location === 'home' && <ProfileCard location='home' />}
			{location === 'profile' && <UserInfo />}
			<FollowersCard />
		</div>
	);
};

export default LeftSidebar;
