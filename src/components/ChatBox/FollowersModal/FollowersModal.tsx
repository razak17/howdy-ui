import { Modal, useMantineTheme } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import { IUser } from '../../../lib/types';
import FollowersCard from '../../FollowersCard/FollowersCard';

const FollowersModal = ({
	isLoading,
	users,
	modalOpened,
	setModalOpened
}: {
	users: IUser[];
	isLoading: boolean;
	modalOpened: boolean;
	setModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const { colors, colorScheme } = useMantineTheme();

	return (
		<Modal
			overlayColor={colorScheme === 'dark' ? colors.dark[9] : colors.gray[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
			size='55%'
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
		>
			<FollowersCard
				location='modal'
				isLoading={isLoading}
				users={users as IUser[]}
			/>
		</Modal>
	);
};

export default FollowersModal;
