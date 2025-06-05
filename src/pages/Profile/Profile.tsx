import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { getUserPosts } from '../../lib/api/post';
import { IPost, QueryKeys } from '../../lib/types';

const Profile = () => {
	const params = useParams();

	const currentUserId = params.id;

	const { data: posts, isLoading } = useQuery([QueryKeys.USER_POSTS], () =>
		getUserPosts(currentUserId as string)
	);

	return (
		<div className='profile'>
			<LeftSidebar location='profile' />
			<div className='profile-center'>
				<MainContent
					location='profile'
					posts={posts as IPost[]}
					postsIsLoading={isLoading}
				/>
			</div>
			<RightSidebar />
		</div>
	);
};

export default Profile;
