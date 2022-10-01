import { Link } from 'react-router-dom';
import coverImg from '../../assets/cover.jpg';
import profileImg from '../../assets/profile.jpg';
import './ProfileCard.css';

const ProfileCard = () => {
	return (
		<div className='profile-card'>
			<div className='profile-imgs'>
				<img className='cover-img' src={coverImg} alt='coverImage' />
				<img className='profile-img' src={profileImg} alt='profileImage' />
			</div>
			<div className='profile-name'>
				<span>Jane Doe</span>
				<span>No Bio.</span>
			</div>
			<div className='follow-status'>
				<div>
					<div className='follow'>
						<span>4</span>
						<span>Followers</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>4</span>
						<span>Following</span>
					</div>
				</div>
			</div>
			<span>
				<Link to={`/profile/jane123`} className='profile-link'>
					My Profile
				</Link>
			</span>
		</div>
	);
};

export default ProfileCard;
