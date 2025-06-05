import { UilSetting } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

import Home from '../../assets/home.png';
// import Notif from '../../assets/notif.png';
import Comment from '../../assets/comment.png';
import { useMe } from '../../context/me';

const NavIcons = () => {
	const { me } = useMe();

	return (
		<div className='nav-icons'>
			<Link to='/'>
				<img src={Home} alt='home' />
			</Link>
			<Link to={`/profile/${me?._id}`}>
				<UilSetting />
			</Link>
			{/* <img src={Notif} alt='notification' /> */}
			<Link to='/chat'>
				<img src={Comment} alt='comment' />
			</Link>
		</div>
	);
};

export default NavIcons;
