import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getRandomPosts } from '../../lib/api/post';
import { getUser } from '../../lib/api/users';
import { IPost, QueryKeys } from '../../lib/types';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';

const MainContent = ({ location }: { location?: string }) => {
	const params = useParams();

	const currentUserId = params.id;

	const { data: user, isLoading } = useQuery([QueryKeys.USER, currentUserId], () =>
		getUser(currentUserId as string)
	);

	const { data: posts, isLoading: postsIsLoading } = useQuery([QueryKeys.POSTS], () =>
		getRandomPosts()
	);

	const filteredPosts = params.id ? posts?.filter((post) => post.userId === params.id) : posts;

	if (isLoading) <Loader />;
	return (
		<div className='main-content'>
			{user && (
				<ProfileCard postsLen={filteredPosts?.length as number} user={user} location='profile' />
			)}
			{location === 'home' && <CreatePost />}
			<Posts
				posts={location == 'home' ? (posts as IPost[]) : (filteredPosts as IPost[])}
				isLoading={postsIsLoading}
			/>
		</div>
	);
};

export default MainContent;
