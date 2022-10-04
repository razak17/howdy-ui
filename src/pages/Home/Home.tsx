import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import MainContent from '../../components/MainContent/MainContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Home = () => {
	return (
		<div className='home-container'>
			<LeftSidebar location='home' />
			<MainContent location='home' />
			<RightSidebar />
		</div>
	);
};

export default Home;
