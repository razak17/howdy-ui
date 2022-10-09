import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { useMe } from '../../context/me';
import { followUser, unfollowUser } from '../../lib/api/users';
import { IUser, QueryKeys } from '../../lib/types';

const FollowButton = ({ user }: { user: IUser }) => {
	const queryClient = useQueryClient();

	const { me } = useMe();

	const followMutation = useMutation<string, AxiosError, Parameters<typeof followUser>['0']>(
		followUser,
		{
			onSuccess: () => {
				queryClient.invalidateQueries([QueryKeys.USERS, QueryKeys.USER, QueryKeys.POSTS]);
			}
		}
	);

	const unfollowMutation = useMutation<string, AxiosError, Parameters<typeof unfollowUser>['0']>(
		unfollowUser,
		{
			onSuccess: () => {
				queryClient.invalidateQueries([QueryKeys.USERS, QueryKeys.USER, QueryKeys.POSTS]);
			}
		}
	);

	const isFollowing = user.followers.includes(me?._id as string);

	const handleFollow = () => {
		isFollowing ? unfollowMutation.mutate(user._id) : followMutation.mutate(user._id);
	};

	return (
		<button
			className={isFollowing ? 'button fc-button unfollow-button' : 'button fc-button'}
			onClick={handleFollow}
      disabled={followMutation.isLoading || unfollowMutation.isLoading}
		>
			{isFollowing ? 'Unfollow' : 'Follow'}
		</button>
	);
};

export default FollowButton;
