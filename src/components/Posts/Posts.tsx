import { IPost } from '../../lib/types';
import Loader from '../Loader/Loader';
import Post from '../Post/Post';

const Posts = ({ isLoading, posts }: { isLoading: boolean; posts: IPost[] }) => {
	return (
		<div className='posts'>
			{isLoading ? (
				<Loader />
			) : (
				posts && posts.map((post, id) => {
					return <Post post={post} key={id} />;
				})
			)}
		</div>
	);
};

export default Posts;
