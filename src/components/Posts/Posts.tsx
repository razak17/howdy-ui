import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getRandomPosts } from '../../lib/api/post';
import { QueryKeys } from '../../lib/types';
import Post from '../Post/Post';

const Posts = () => {
	const params = useParams();

	const { data: posts } = useQuery([QueryKeys.POSTS], () => getRandomPosts());

	const loading = false;

	if (!posts) return <p>No posts found!</p>;

	const filteredPosts = params.id ? posts.filter((post) => post.userId === params.id) : posts;

	return (
		<div className='posts'>
			{loading
				? 'Fetching posts....'
				: filteredPosts.map((post, id) => {
						return <Post post={post} key={id} />;
				  })}
		</div>
	);
};

export default Posts;
