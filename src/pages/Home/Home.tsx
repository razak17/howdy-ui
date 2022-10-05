import { useQuery } from 'react-query';

import { getRandomPosts } from '../../lib/api/post';
import { IPost, QueryKeys } from '../../lib/types';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Home = () => {
	const { data: posts, isLoading } = useQuery([QueryKeys.POSTS], () =>
		getRandomPosts()
	);

	return (
		<div className='home-container'>
			<LeftSidebar location='home' />
			<MainContent posts={posts as IPost[]} postsIsLoading={isLoading} location='home' />
			<RightSidebar />
		</div>
	);
};

export default Home;
