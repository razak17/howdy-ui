import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';

const MainContent = () => {
	return (
		<div className='main-content'>
			<CreatePost />
			<Posts />
		</div>
	);
};

export default MainContent;
