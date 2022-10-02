import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import Searchbar from '../Searchbar/Searchbar';

const LeftSidebar = () => {
	return (
		<div className='left-side-bar'>
			<Searchbar />
			<ProfileCard location='home' />
			<FollowersCard />
		</div>
	);
};

export default LeftSidebar;
