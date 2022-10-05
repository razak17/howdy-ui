import { AxiosError } from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import profileImg from '../../assets/buddy.png';
import { useMe } from '../../context/me';
import { followUser, unfollowUser } from '../../lib/api/users';
import { IUser, QueryKeys, TLocation } from '../../lib/types';
import FollowersModal from '../ChatBox/FollowersModal/FollowersModal';
import Loader from '../Loader/Loader';
import './FollowersCard.css';

const FollowersCard = ({
	location,
	users,
	isLoading
}: {
	location?: TLocation;
	users: IUser[];
	isLoading: boolean;
}) => {
	const [modalOpened, setModalOpened] = useState(false);

	const { me } = useMe();

	let filteredUsers = users ? [users[0], users[1]] : null;

	if (location === 'modal') {
		filteredUsers = users;
	}

	const queryClient = useQueryClient();

	const followMutation = useMutation<string, AxiosError, Parameters<typeof followUser>['0']>(
		followUser,
		{
			onSuccess: () => {
				queryClient.invalidateQueries([QueryKeys.USERS]);
				queryClient.invalidateQueries([QueryKeys.USER]);
			}
		}
	);

	const unfollowMutation = useMutation<string, AxiosError, Parameters<typeof unfollowUser>['0']>(
		unfollowUser,
		{
			onSuccess: () => {
				queryClient.invalidateQueries([QueryKeys.USERS]);
				queryClient.invalidateQueries([QueryKeys.USER]);
			}
		}
	);

	const handleFollow = (user: IUser) => {
		user.followers.includes(me?._id as string)
			? unfollowMutation.mutate(user._id)
			: followMutation.mutate(user._id);
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
                <Link to={`/profile/${user._id}`}>
                  <span>@{user.username}</span>
                </Link>
								</div>
							</div>
							<button
								className={
									user?.followers.includes(me?._id as string)
										? 'button fc-button unfollow-button'
										: 'button fc-button'
								}
								onClick={() => handleFollow(user)}
							>
								{user.followers.includes(me?._id as string) ? 'Unfollow' : 'Follow'}
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
