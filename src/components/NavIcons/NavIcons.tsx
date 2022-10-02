import { UilSetting } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

import Home from '../../assets/home.png';
import Notif from '../../assets/notif.png';
import Comment from '../../assets/comment.png';

const NavIcons = () => {
	return (
		<div className='nav-icons'>
			<Link to='/home'>
				<img src={Home} alt='home' />
			</Link>
			<UilSetting />
			<img src={Notif} alt='notification' />
			<Link to='/chat'>
				<img src={Comment} alt='comment' />
			</Link>
		</div>
	);
};

export default NavIcons;
