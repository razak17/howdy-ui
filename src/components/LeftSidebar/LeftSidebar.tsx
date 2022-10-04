import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import Searchbar from '../Searchbar/Searchbar';
import UserInfo from '../UserInfo/UserInfo';
import { useMe } from '../../context/me';
import { useQuery } from 'react-query';
import { IUser, QueryKeys } from '../../lib/types';
import { getUser, getUsers } from '../../lib/api/users';

const LeftSidebar = ({ location }: { location: 'home' | 'profile' }) => {
	const { me } = useMe();

	const { data: user } = useQuery([QueryKeys.USER], () => getUser(`${me?._id}`));

	const { data: users, isLoading } = useQuery([QueryKeys.USERS], () => getUsers());

	return (
		<div className='left-side-bar'>
			<Searchbar />
			{user && location === 'home' && <ProfileCard user={user} location='home' />}
			{user && location === 'profile' && <UserInfo user={user} />}
			<FollowersCard users={users as IUser[]} isLoading={isLoading} />
		</div>
	);
};

export default LeftSidebar;
