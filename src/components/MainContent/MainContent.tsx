import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getUser } from '../../lib/api/users';
import { QueryKeys } from '../../lib/types';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';

const MainContent = () => {
	const params = useParams();

	const currentUserId = params.id;

	const { data: user, isLoading } = useQuery([QueryKeys.USER, currentUserId], () =>
		getUser(currentUserId as string)
	);

	if (isLoading) <Loader />;
	return (
		<div className='main-content'>
			{user && <ProfileCard user={user} location='profile' />}
			<CreatePost />
			<Posts />
		</div>
	);
};

export default MainContent;
