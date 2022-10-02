import { useState } from 'react';
import NavIcons from '../NavIcons/NavIcons';
import ShareModal from '../ShareModal/ShareModal';
import TrendingCard from '../TrendingCard/TrendingCard';

import './RightSidebar.css';

const RightSidebar = () => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<div className='right-sidebar'>
			<NavIcons />
			<TrendingCard />
			<button className='button right-button' onClick={() => setModalOpened(true)}>
				Share
			</button>
			<ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
		</div>
	);
};

export default RightSidebar;
