import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

import postPic from '../../assets/postpic1.jpg';
import Comment from '../../assets/comment.png';
import Share from '../../assets/share.png';
import Heart from '../../assets/like.png';
import NotLike from '../../assets/notlike.png';
import profileImg from '../../assets/buddy.png';
import { IPost, QueryKeys } from '../../lib/types';
import { getUser } from '../../lib/api/users';
import './Post.css';
import { useState } from 'react';

const Post = ({ post }: { post: IPost }) => {
	const { data: user } = useQuery([QueryKeys.USER, post._id], () => getUser(`${post.userId}`));

	const [liked, setLiked] = useState(post.likes.includes(user?._id as string));
	const [likes, setLikes] = useState(post.likes.length);

	return (
		<div className='post'>
			<div className='detail'>
				<div>
					<img
						className='post-profile-img'
						src={user?.profilePicture ? user.profilePicture : profileImg}
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
			{post.image && <img src={postPic} alt='' />}
			<div className='post-reactions'>
				<img src={liked ? Heart : NotLike} alt='' style={{ cursor: 'pointer' }} />
				<img src={Comment} alt='comment' />
				<img src={Share} alt='share' />
			</div>

			<span className='likes'>{3} likes</span>
		</div>
	);
};

export default Post;
