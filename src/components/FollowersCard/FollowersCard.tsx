import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMe } from '../../context/me';
import { defaultProfileImg } from '../../lib/constants';
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


	const usersWithoutCurrent = users.filter((user) => user._id !== me?._id);

  const otherUsersExist = usersWithoutCurrent.length > 1;

	let filteredUsers =
		users && otherUsersExist ? [usersWithoutCurrent[0], usersWithoutCurrent[1]] : null;

	if (location === 'modal') {
		filteredUsers = users;
	}

	if (!otherUsersExist) <div className='followers-card'>No Other users found</div>;

	return (
		<div className='followers-card'>
			<h3>People you may know</h3>
			{isLoading && <Loader />}
			{filteredUsers?.map((user) => {
				return (
					<div key={user._id} className='follower'>
						<div>
							<img
								/* eslint-disable-next-line max-len */
								src={user.profilePicture ? user.profilePicture : defaultProfileImg}
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
