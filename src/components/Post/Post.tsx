import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { format } from 'timeago.js';

import Comment from '../../assets/comment.png';
import Share from '../../assets/share.png';
import Heart from '../../assets/like.png';
import NotLike from '../../assets/notlike.png';
import { IPost, QueryKeys } from '../../lib/types';
import { getUser } from '../../lib/api/users';
import { likePost } from '../../lib/api/post';
import { useMe } from '../../context/me';
import './Post.css';
import { defaultProfileImg } from '../../lib/constants';

const Post = ({ post }: { post: IPost }) => {
	const queryClient = useQueryClient();
	const params = useLocation();

	const { me } = useMe();

	const { data: user } = useQuery([QueryKeys.USER, post._id], () => getUser(`${post?.userId}`));

	const mutation = useMutation<string, AxiosError, Parameters<typeof likePost>['0']>(likePost, {
		onSuccess: () => {
			if (params.pathname === '/') {
				queryClient.invalidateQueries([QueryKeys.POSTS]);
			} else if (params.pathname === '/search') {
				queryClient.invalidateQueries([QueryKeys.SEARCH]);
			} else {
				queryClient.invalidateQueries([QueryKeys.USER_POSTS]);
			}
		}
	});

	const handleLike = () => {
		mutation.mutate(post._id);
	};

	return (
		<div className='post'>
			<div className='detail'>
				<div>
					<img
						className='profile-image'
						src={user?.profilePicture ? user.profilePicture : defaultProfileImg}
						alt=''
					/>
					<div className='profile-user'>
						<p>
							{user?.firstName} {user?.lastName}
						</p>
						<Link to={`/profile/${user?._id}`} className='profile-link'>
							<p>@{user?.username}</p>
						</Link>
					</div>
					<span>{format(post.createdAt)}</span>
				</div>
				<span className='post-desc'>{post.description}</span>
			</div>
			{post.image && <img src={post.image} alt='' />}
			<div className='post-reactions'>
				<img
					src={post.likes.includes(me?._id as string) ? Heart : NotLike}
					alt=''
					onClick={handleLike}
				/>
				<img src={Comment} alt='comment' />
				<img src={Share} alt='share' />
			</div>

			<span className='likes'>
				{post.likes.length}
				{post.likes.length && post.likes.length === 1 ? ' like' : ' likes'}
			</span>
		</div>
	);
};

export default Post;
