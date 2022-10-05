import { Link } from 'react-router-dom';

import coverImg from '../../assets/cover.jpg';
import profileImg from '../../assets/buddy.png';
import { IUser, TLocation } from '../../lib/types';
import { useMe } from '../../context/me';
import './ProfileCard.css';
import FollowButton from '../FollowButton/FollowButton';

interface IProps {
	location?: TLocation;
	user: IUser;
	postsLen?: number;
}

const ProfileCard = ({ location, user, postsLen }: IProps) => {
	const { me } = useMe();
	return (
		<div className='profile-card'>
			<div className='profile-imgs'>
				<img
					className={location === 'profile' ? 'cover-img cover-img-profile' : 'cover-img'}
					src={user?.coverPicture ? coverImg : coverImg}
					alt='coverImage'
				/>
				<img
					className='profile-img'
					src={user?.profilePicture ? profileImg : profileImg}
					alt='profileImage'
				/>
			</div>
			<div className='profile-name'>
				<span>
					{user?.firstName} {user?.lastName}
				</span>
				<span>{user?.about}</span>
			</div>
			{location === 'profile' && me?._id !== user._id && (
				<div className='follow-btn'>
            <FollowButton user={user} />
				</div>
			)}
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
								<span>{postsLen}</span>
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
