import { useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';
import './UserInfo.css';

const UserInfo = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const user = { _id: '1', name: 'Jane', lastName: '' };

	const handleLogOut = () => {
		alert('handleLogOut');
	};

	return (
		<div className='info-card'>
			<div className='info-head'>
				<h4>Profile Info</h4>
				{user._id === '1' ? (
					<div>
						<UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
						<ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user} />
					</div>
				) : (
					''
				)}
			</div>

			<div className='info'>
				<span>
					<b>Relationship status: </b>
				</span>
				<span>relationship</span>
			</div>
			<div className='info'>
				<span>
					<b>City: </b>
				</span>
				<span>Ottawa</span>
			</div>
			<div className='info'>
				<span>
					<b>Works at: </b>
				</span>
				<span>worksAt</span>
			</div>

			<button className='button logout-button' onClick={handleLogOut}>
				Log Out
			</button>
		</div>
	);
};

export default UserInfo;