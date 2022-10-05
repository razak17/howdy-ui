import { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';
import './UserInfo.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IUser, QueryKeys } from '../../lib/types';
import { AxiosError } from 'axios';
import { logout } from '../../lib/api/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../../lib/api/users';
import { useMe } from '../../context/me';

const UserInfo = () => {
	const [modalOpened, setModalOpened] = useState(false);

	const params = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { me } = useMe();

	const currentUserId = params.id;

	const { data: user } = useQuery([QueryKeys.USER_PROFILE, currentUserId], () =>
		getUser(currentUserId as string)
	);

	const mutation = useMutation<string, AxiosError, Parameters<typeof logout>>(logout, {
		onSuccess: () => {
			queryClient.invalidateQueries([QueryKeys.ME]);
			navigate('/login', { replace: true });
		}
	});

	const handleLogOut = () => {
		mutation.mutate([]);
	};

	console.log({ user });

	return (
		<div className='info-card'>
			<div className='info-head'>
				<h4>Profile Info</h4>
				{user?._id === me?._id && (
					<div>
						<UilPen onClick={() => setModalOpened(true)} />
						<ProfileModal
							user={user as IUser}
							modalOpened={modalOpened}
							setModalOpened={setModalOpened}
						/>
					</div>
				)}
			</div>

			<div className='info'>
				<span>
					<b>Relationship status: </b>
				</span>
				<span>{user?.relationshipStatus ? user.relationshipStatus : 'No Info'}</span>
			</div>
			<div className='info'>
				<span>
					<b>City: </b>
				</span>
				<span>{user?.city ? user.city : 'No Info'}</span>
			</div>
			<div className='info'>
				<span>
					<b>Works at: </b>
				</span>
				<span>{user?.workplace ? user.workplace : 'No Info'}</span>
			</div>

			{user?._id === me?._id && (
				<button className='button logout-button' onClick={handleLogOut}>
					Log Out
				</button>
			)}
		</div>
	);
};

export default UserInfo;
