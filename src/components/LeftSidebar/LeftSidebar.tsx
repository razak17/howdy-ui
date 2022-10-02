import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import Searchbar from '../Searchbar/Searchbar';
import UserInfo from '../UserInfo/UserInfo';
import { useMe } from '../../context/me';
import { useQuery } from 'react-query';
import { QueryKeys } from '../../lib/types';
import { getUser } from '../../lib/api/users';

const LeftSidebar = ({ location }: { location: 'home' | 'profile' }) => {
	const { me } = useMe();

	const { data: user } = useQuery([QueryKeys.USER, me?._id], () => getUser(`${me?._id}`));

	return (
		<div className='left-side-bar'>
			<Searchbar />
			{user && location === 'home' && <ProfileCard user={user} location='home' />}
			{user && location === 'profile' && <UserInfo user={user} />}
			<FollowersCard />
		</div>
	);
};

export default LeftSidebar;
