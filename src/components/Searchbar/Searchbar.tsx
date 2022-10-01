import { UilSearch } from '@iconscout/react-unicons';

import Logo from '../../assets/logo.png';
import './Searchbar.css';

const Searchbar = () => {
	return (
		<div className='search-bar'>
			<div className='flex-center'>
				<img src={Logo} alt='' />
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
