import FollowersCard from "../../FollowersCard/FollowersCard";
import ProfileCard from "../ProfileCard/ProfileCard";
import Searchbar from "../Searchbar/Searchbar";

const LeftSidebar = () => {
	return (
		<div>
			<Searchbar />
			<ProfileCard />
			<FollowersCard />
		</div>
	);
};

export default LeftSidebar;
