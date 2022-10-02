import { trending } from '../../lib/constants';
import './TrendingCard.css';

const TrendingCard = () => {
	return (
		<div className='trending-card'>
			<h3>Trends for you</h3>

			{trending.map((trend, id) => {
				return (
					<div className='trend' key={id}>
						<span>{trend.name}</span>
						<span>{trend.shares}k shares</span>
					</div>
				);
			})}
		</div>
	);
};

export default TrendingCard;
