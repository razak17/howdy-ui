import { useState } from 'react';

import profileImg from '../../assets/buddy.png';
import { useMe } from '../../context/me';
import { IUser } from '../../lib/types';
import FollowersModal from '../ChatBox/FollowersModal/FollowersModal';
import Loader from '../Loader/Loader';
import './FollowersCard.css';

const FollowersCard = ({
	location,
	users,
	isLoading
}: {
	location?: string;
	users: IUser[];
	isLoading: boolean;
}) => {
	const [modalOpened, setModalOpened] = useState(false);

	const { me } = useMe();

	let filteredUsers = users ? [users[0], users[1]] : null;

	if (location === 'modal') {
		filteredUsers = users;
	}

	const handleFollow = () => {
		alert('follow');
	};

	return (
		<div className='followers-card'>
			<h3>People you may know</h3>
			{isLoading && <Loader />}
			{filteredUsers?.map((user) => {
				if (user._id !== me?._id)
					return (
						<div key={user._id} className='follower'>
							<div>
								<img
									src={user.profilePicture ? profileImg : profileImg}
									alt='profileImage'
									className='profile-image'
								/>
								<div className='name'>
									<span>
										{user.firstName} {user.lastName}
									</span>
									<span>@{user.username}</span>
								</div>
							</div>
							<button
								className={
									user?.followers.includes(user._id)
										? 'button fc-button unfollow-button'
										: 'button fc-button'
								}
								onClick={handleFollow}
							>
								{user.followers.includes(user._id) ? 'Unfollow' : 'Follow'}
							</button>
						</div>
					);
			})}

			{!location && <span onClick={() => setModalOpened(true)}>Show more</span>}

			<FollowersModal
				isLoading={isLoading}
				users={users as IUser[]}
				modalOpened={modalOpened}
				setModalOpened={setModalOpened}
			/>
		</div>
	);
};

export default FollowersCard;
