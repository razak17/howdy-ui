import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Profile = () => {

	return (
		<div className='profile'>
			<LeftSidebar location='profile' />
			<div className='profile-center'>
				<MainContent />
			</div>
			<RightSidebar />
		</div>
	);
};

export default Profile;
