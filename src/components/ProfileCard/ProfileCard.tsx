import { Link } from 'react-router-dom';
import coverImg from '../../assets/cover.jpg';
import profileImg from '../../assets/buddy.png';
import { IUser } from '../../lib/types';
import './ProfileCard.css';

const ProfileCard = ({
	location,
	user
}: {
	location: 'home' | 'profile';
    user: IUser;
}) => {
	return (
		<div className='profile-card'>
			<div className='profile-imgs'>
				<img
					className='cover-img'
					src={user?.coverPicture ? user.coverPicture : coverImg}
					alt='coverImage'
				/>
				<img
					className='profile-img'
					src={user?.profilePicture ? user.profilePicture : profileImg}
					alt='profileImage'
				/>
			</div>
			<div className='profile-name'>
				<span>
					{user?.firstName} {user?.lastName}
				</span>
				<span>{user?.about}</span>
			</div>
			<div className='follow-status'>
				<div>
					<div className='follow'>
						<span>{user?.followers.length}</span>
						<span>Followers</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>{user?.following.length}</span>
						<span>Following</span>
					</div>
					{location === 'profile' && (
						<>
							<div className='vl'></div>
							<div className='follow'>
								<span>7</span>
								<span>Posts</span>
							</div>
						</>
					)}
				</div>
			</div>
			{location === 'home' && (
				<span>
					<Link to={`/profile/${user._id}`} className='profile-link'>
						My Profile
					</Link>
				</span>
			)}
		</div>
	);
};

export default ProfileCard;
