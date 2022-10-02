import postPic from '../../assets/postpic1.jpg';
import Comment from '../../assets/comment.png';
import Share from '../../assets/share.png';
import Heart from '../../assets/like.png';
import NotLike from '../../assets/notlike.png';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = ({ data }: { data: any }) => {
	const liked = true;

	return (
		<div className='post'>
			<img src={postPic} alt='' />
			<div className='post-reactions'>
				<img src={liked ? Heart : NotLike} alt='' style={{ cursor: 'pointer' }} />
				<img src={Comment} alt='comment' />
				<img src={Share} alt='share' />
			</div>

			<span className='likes'>{3} likes</span>
			<div className='detail'>
				<div>
					<Link to='/profile/1' className='profile-link'>
						<p>@name</p>
					</Link>
				</div>
				<span>description</span>
			</div>
		</div>
	);
};

export default Post;
