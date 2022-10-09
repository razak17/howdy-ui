import { useState } from 'react';

import { defaultProfileImg } from '../../lib/constants';

const Conversation = ({
	data,
	currentUser,
	online
}: {
	data: any;
	currentUser: any;
	online: any;
}) => {
	const [userData, setUserData] = useState<any>(null);

	return (
		<>
			<div className='follower conversation'>
				<div>
					{online && <div className='online-dot'></div>}
					<img
						src={defaultProfileImg}
						alt='Profile'
						className='followerImage'
						style={{ width: '50px', height: '50px' }}
					/>
					<div className='name' style={{ fontSize: '0.8rem' }}>
						<span>
							{userData?.firstname} {userData?.lastname}
						</span>
						<span style={{ color: online ? '#51e200' : '' }}>{online ? 'Online' : 'Offline'}</span>
					</div>
				</div>
			</div>
			<hr style={{ width: '85%', border: '0.1px solid #ececec' }} />
		</>
	);
};

export default Conversation;
