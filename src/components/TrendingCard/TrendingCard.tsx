import { useNavigate } from 'react-router-dom';
import { trending } from '../../lib/constants';
import './TrendingCard.css';

const TrendingCard = () => {
	const navigate = useNavigate();

	return (
		<div className='trending-card'>
			<h3>Trends for you</h3>

			{trending.map((trend, id) => {
				return (
					<div
						className='trend'
						key={id}
						onClick={() => {
							navigate(`/search?q=${trend.name}`);
						}}
					>
						<span>{trend.name}</span>
						<span>{trend.shares}k shares</span>
					</div>
				);
			})}
		</div>
	);
};

export default TrendingCard;
