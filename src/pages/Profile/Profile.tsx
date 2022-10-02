import { useQuery } from 'react-query';

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { useMe } from '../../context/me';
import { getUser } from '../../lib/api/users';
import { QueryKeys } from '../../lib/types';

const Profile = () => {
	const { me } = useMe();

	const { data: user } = useQuery([QueryKeys.USER, me?._id], () => getUser(`${me?._id}`));

	return (
		<div className='profile'>
			<LeftSidebar location='profile' />
			<div className='profile-center'>
				{user && <ProfileCard user={user} location='profile' />}
				<MainContent />
			</div>
			<RightSidebar />
		</div>
	);
};

export default Profile;
