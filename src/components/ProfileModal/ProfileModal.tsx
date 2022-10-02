import { Modal, useMantineTheme } from '@mantine/core';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

const ProfileModal = ({
	modalOpened,
	setModalOpened
}: {
	modalOpened: boolean;
	setModalOpened: Dispatch<SetStateAction<boolean>>;
	data: any;
}) => {
	const [profileImage, setProfileImage] = useState<File | null>(null);
	const [coverImage, setCoverImage] = useState<File | null>(null);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		workplace: '',
		city: '',
		country: '',
		relationshipStatus: '',
		profilePicture: '',
		coverPicture: ''
	});

	const { colorScheme, colors } = useMantineTheme();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const img = e.target.files[0];
			e.target.name === 'profileImage' ? setProfileImage(img) : setCoverImage(img);
		}
	};

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const UserData = formData;
		if (profileImage) {
			const data = new FormData();
			const fileName = Date.now() + profileImage.name;
			data.append('name', fileName);
			data.append('file', profileImage);
			UserData.profilePicture = fileName;
		}
		if (coverImage) {
			const data = new FormData();
			const fileName = Date.now() + coverImage.name;
			data.append('name', fileName);
			data.append('file', coverImage);
			UserData.coverPicture = fileName;
		}
		setModalOpened(false);
	};

	return (
		<Modal
			overlayColor={colorScheme === 'dark' ? colors.dark[9] : colors.gray[2]}
			overlayOpacity={0.55}
			overlayBlur={3}
			size='55%'
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
		>
			<form className='info-form' onSubmit={handleSubmit}>
				<h3>Your Info</h3>
				<div className='form-item'>
					<input
						value={formData.firstName}
						onChange={handleChange}
						type='text'
						placeholder='First Name'
						name='firstName'
						className='info-input'
					/>
					<input
						value={formData.lastName}
						onChange={handleChange}
						type='text'
						placeholder='Last Name'
						name='lastName'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.workplace}
						onChange={handleChange}
						type='text'
						placeholder='Works at'
						name='workplace'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.city}
						onChange={handleChange}
						type='text'
						placeholder='City'
						name='city'
						className='info-input'
					/>
					<input
						value={formData.country}
						onChange={handleChange}
						type='text'
						placeholder='Country'
						name='country'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.relationshipStatus}
						onChange={handleChange}
						type='text'
						className='info-input'
						placeholder='Relationship Status'
						name='relationshipStatus'
					/>
				</div>

				<div className='form-item'>
					Profile image
					<input type='file' name='profileImage' onChange={onImageChange} />
					Cover image
					<input type='file' name='coverImage' onChange={onImageChange} />
				</div>

				<button className='button info-button' type='submit'>
					Update
				</button>
			</form>
		</Modal>
	);
};

export default ProfileModal;
