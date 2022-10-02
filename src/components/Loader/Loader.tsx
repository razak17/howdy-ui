import { Loader as MantineLoader } from '@mantine/core';

const Loader = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '2rem',
				marginTop: '3rem'
			}}
		>
			<MantineLoader />
		</div>
	);
};

export default Loader;
