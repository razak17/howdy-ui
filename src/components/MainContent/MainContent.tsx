import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { useMe } from '../../context/me';
import { getUser } from '../../lib/api/users';
import { IPost, QueryKeys, TLocation } from '../../lib/types';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';

interface IProps {
	location?: TLocation;
	posts: IPost[];
	postsIsLoading: boolean;
}

const MainContent = ({ location, posts, postsIsLoading }: IProps) => {
	const { me } = useMe();

	const params = useParams();

	const currentUserId = params.id ? params.id : me?._id;

	const { data: user, isLoading } = useQuery([QueryKeys.USER, currentUserId], () =>
		getUser(currentUserId as string)
	);

	if (isLoading) <Loader />;
	return (
		<div className='main-content'>
			{user && location !== 'search' && (
				<ProfileCard postsLen={posts?.length as number} user={user} location='profile' />
			)}
			{location === 'home' && <CreatePost />}
			<Posts
				posts={posts as IPost[]}
				isLoading={postsIsLoading}
			/>
		</div>
	);
};

export default MainContent;
