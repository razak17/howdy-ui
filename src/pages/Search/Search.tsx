import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { searchPosts } from '../../lib/api/post';
import { IPost, QueryKeys } from '../../lib/types';

const Search = () => {
	const query = useLocation().search;

	const { data: posts, isLoading: postsIsLoading } = useQuery([QueryKeys.SEARCH, query], () =>
		searchPosts(query)
	);

	return (
		<div className='home-container'>
			<LeftSidebar location='search' />
			<MainContent
				posts={posts as IPost[]}
				postsIsLoading={postsIsLoading}
				location='search'
				query={query}
			/>
			<RightSidebar />
		</div>
	);
};

export default Search;
