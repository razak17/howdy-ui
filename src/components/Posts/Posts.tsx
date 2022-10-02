import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
	const params = useParams();

	const posts = [
		{ userId: '1', description: 'Hello World' },
		{ userId: '2', description: 'Hello Mom' },
		{ userId: '3', description: 'Hey Girl' }
	];

	const loading = false;

	if (!posts) return <p>No posts found!</p>;

	const filteredPosts = params.id ? posts.filter((post) => post.userId === params.id) : posts;

	return (
		<div className='posts'>
			{loading
				? 'Fetching posts....'
				: filteredPosts.map((post, id) => {
						return <Post data={post} key={id} />;
				  })}
		</div>
	);
};

export default Posts;
