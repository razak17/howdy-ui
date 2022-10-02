import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Profile = () => {
	return (
		<div className='profile'>
			<LeftSidebar location='profile' />
			<div className='profile-center'>
				<ProfileCard location='profile' />
				<MainContent />
			</div>
			<RightSidebar />
		</div>
	);
};

export default Profile;
