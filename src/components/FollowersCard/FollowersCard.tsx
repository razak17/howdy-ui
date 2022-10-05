import { useState } from 'react';
import { Link } from 'react-router-dom';

import profileImg from '../../assets/buddy.png';
import { useMe } from '../../context/me';
import { IUser, TLocation } from '../../lib/types';
import FollowersModal from '../ChatBox/FollowersModal/FollowersModal';
import FollowButton from '../FollowButton/FollowButton';
import Loader from '../Loader/Loader';
import './FollowersCard.css';

interface IProps {
	location?: TLocation;
	users: IUser[];
	isLoading: boolean;
}

const FollowersCard = ({ location, users, isLoading }: IProps) => {
	const [modalOpened, setModalOpened] = useState(false);

	const { me } = useMe();

	let filteredUsers = users ? [users[0], users[1]] : null;

	if (location === 'modal') {
		filteredUsers = users;
	}

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
									<Link to={`/profile/${user._id}`}>
										<span>@{user.username}</span>
									</Link>
								</div>
							</div>
							<FollowButton user={user} />
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
