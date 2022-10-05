import { useQuery } from 'react-query';

import { getTimeline } from '../../lib/api/post';
import { IPost, QueryKeys } from '../../lib/types';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { useMe } from '../../context/me';

const Home = () => {
	const { me } = useMe();
	const { data: posts, isLoading } = useQuery([QueryKeys.POSTS], () =>
		getTimeline(me?._id as string)
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
