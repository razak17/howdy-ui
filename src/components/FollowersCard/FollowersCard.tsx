import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

import profileImg from '../../assets/profile.jpg';
import './FollowersCard.css';

const FollowersCard = ({ location }: { location: string }) => {
	const [modalOpened, setModalOpened] = useState(false);

	const { colors, colorScheme } = useMantineTheme();

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

			{!location ? <span onClick={() => setModalOpened(true)}>Show more</span> : ''}

			<Modal
				overlayColor={colorScheme === 'dark' ? colors.dark[9] : colors.gray[2]}
				overlayOpacity={0.55}
				overlayBlur={3}
				size='55%'
				opened={modalOpened}
				onClose={() => setModalOpened(false)}
			>
				<FollowersCard location='modal' />
			</Modal>
		</div>
	);
};

export default FollowersCard;
