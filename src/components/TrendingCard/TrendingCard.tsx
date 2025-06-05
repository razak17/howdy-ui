import { trending } from '../../lib/constants';
import { Link } from 'react-router-dom';
import './TrendingCard.css';

const TrendingCard = () => {
	return (
		<div className='trending-card'>
			<h3>Trends for you</h3>

			{trending.map((trend, id) => {
				return (
					<Link to={`/search?q=${trend.name}`} key={id}>
						<div className='trend' key={id}>
							<span>{trend.name}</span>
							<span>{trend.shares}k shares</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TrendingCard;
