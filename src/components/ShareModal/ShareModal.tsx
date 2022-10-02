import { Modal, useMantineTheme } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';
import CreatePost from '../CreatePost/CreatePost';

const ShareModal = ({
	modalOpened,
	setModalOpened
}: {
	modalOpened: boolean;
	setModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const { colorScheme, colors } = useMantineTheme();

	return (
		<Modal
			overlayColor={colorScheme === 'dark' ? colors.dark[9] : colors.gray[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
			size='55%'
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
		>
			<CreatePost />
		</Modal>
	);
};

export default ShareModal;
