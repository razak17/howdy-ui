import { useQuery } from 'react-query';

import FollowersCard from '../FollowersCard/FollowersCard';
import ProfileCard from '../ProfileCard/ProfileCard';
import Searchbar from '../Searchbar/Searchbar';
import UserInfo from '../UserInfo/UserInfo';
import { useMe } from '../../context/me';
import { IUser, QueryKeys, TLocation } from '../../lib/types';
import { getUser, getUsers } from '../../lib/api/users';

const LeftSidebar = ({ location }: { location: TLocation }) => {
	const { me } = useMe();

	const { data: user } = useQuery([QueryKeys.USER], () => getUser(`${me?._id}`));

	const { data: users, isLoading } = useQuery([QueryKeys.USERS], () => getUsers());

	return (
		<div className='left-sidebar'>
			<Searchbar />
			{user && location !== 'profile' && <ProfileCard user={user} location='home' />}
			{user && location === 'profile' && <UserInfo />}
			{users && location !== 'search' && (
				<FollowersCard users={users as IUser[]} isLoading={isLoading} />
			)}
		</div>
	);
};

export default LeftSidebar;
