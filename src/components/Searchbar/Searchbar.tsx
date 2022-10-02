import { UilSearch } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './Searchbar.css';

const Searchbar = () => {
	return (
		<div className='search-bar'>
			<div className='flex-center'>
				<Link to='/'>
					<img src={Logo} alt='' />
				</Link>
			</div>
			<div className='search'>
				<input type='text' className='search-input' placeholder='Find users or posts' />
				<div className='search-icon'>
					<UilSearch />
				</div>
			</div>
		</div>
	);
};

export default Searchbar;
