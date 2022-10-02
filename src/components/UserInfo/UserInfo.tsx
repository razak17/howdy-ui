import { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';
import './UserInfo.css';
import { useMutation, useQueryClient } from 'react-query';
import { IUser, QueryKeys } from '../../lib/types';
import { AxiosError } from 'axios';
import { logout } from '../../lib/api/auth';
import { useNavigate, useParams } from 'react-router-dom';

const UserInfo = ({ user }: { user: IUser }) => {
	const [modalOpened, setModalOpened] = useState(false);

	const params = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const currentUserId = params.id;

	const mutation = useMutation<string, AxiosError, Parameters<typeof logout>>(logout, {
		onSuccess: () => {
			navigate('/login', { replace: true });
			queryClient.invalidateQueries([QueryKeys.ME]);
		}
	});

	const handleLogOut = () => {
		mutation.mutate([]);
	};

	return (
		<div className='info-card'>
			<div className='info-head'>
				<h4>Profile Info</h4>
				{user._id === currentUserId && (
					<div>
						<UilPen onClick={() => setModalOpened(true)} />
						<ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
					</div>
				)}
			</div>

			<div className='info'>
				<span>
					<b>Relationship status: </b>
				</span>
				<span>{user.relationshipStatus ? user.relationshipStatus : 'No Info'}</span>
			</div>
			<div className='info'>
				<span>
					<b>City: </b>
				</span>
				<span>{user.city ? user.city : 'No Info'}</span>
			</div>
			<div className='info'>
				<span>
					<b>Works at: </b>
				</span>
				<span>{user.workplace ? user.workplace : 'No Info'}</span>
			</div>

			<button className='button logout-button' onClick={handleLogOut}>
				Log Out
			</button>
		</div>
	);
};

export default UserInfo;
