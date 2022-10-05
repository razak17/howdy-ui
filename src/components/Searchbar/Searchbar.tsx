import { UilSearch } from '@iconscout/react-unicons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import './Searchbar.css';

const Searchbar = () => {
	const navigate = useNavigate();

	const [query, setQuery] = useState('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (query.trim() !== '') navigate(`/search?q=${query}`);
	};

	return (
		<div className='search-bar'>
			<div className='flex-center'>
				<Link to='/'>
					<img src={Logo} alt='' />
				</Link>
			</div>
			<div className='search'>
				<form className='form' onSubmit={(e) => handleSearch(e)}>
					<input
						type='text'
						onChange={(e) => setQuery(e.target.value)}
						className='search-input'
						placeholder='Find users or posts'
					/>
					<div className='search-icon'>
						<UilSearch />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Searchbar;
