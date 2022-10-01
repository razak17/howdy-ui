import { useState } from 'react';

import profileImg from '../../assets/profile.jpg';
import './FollowersCard.css';

const FollowersCard = () => {
	const [modalOpened, setModalOpened] = useState(false);

	const handleFollow = () => {
		alert('follow');
	};

	const following = false;
	return (
		<div className='followers-card'>
			<h3>People you may know</h3>
			<div className='follower'>
				<div>
					<img src={profileImg} alt='profileImage' className='follower-image' />
					<div className='name'>
						<span>firstname</span>
						<span>lastname</span>
					</div>
				</div>
				<button
					className={following ? 'button fc-button unfollow-button' : 'button fc-button'}
					onClick={handleFollow}
				>
					{following ? 'Unfollow' : 'Follow'}
				</button>
			</div>
		</div>
	);
};

export default FollowersCard;
