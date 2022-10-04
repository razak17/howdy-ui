import { Link } from 'react-router-dom';

import postPic from '../../assets/postpic1.jpg';
import Comment from '../../assets/comment.png';
import Share from '../../assets/share.png';
import Heart from '../../assets/like.png';
import NotLike from '../../assets/notlike.png';
import profileImg from '../../assets/buddy.png';
import './Post.css';

const Post = ({ data }: { data: any }) => {
	const liked = true;

	return (
		<div className='post'>
			<div className='detail'>
				<div>
					<img
						className='post-profile-img'
						src={data?.profilePicture ? data.profilePicture : profileImg}
						alt='profileImage'
					/>
					<div className='profile-user'>
						<p>Jane Doe</p>
						<Link to='/profile/1' className='profile-link'>
							<p>@jdoe</p>
						</Link>
					</div>
					<span>14 minutes ago</span>
				</div>
				<span className='post-desc'>jane created this awesome post</span>
			</div>
			<img src={postPic} alt='' />
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
