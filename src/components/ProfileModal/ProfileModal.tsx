import { Modal, useMantineTheme } from '@mantine/core';
import { useMutation, useQueryClient } from 'react-query';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { AxiosError } from 'axios';

import app from '../../lib/firebase';
import { updateUser } from '../../lib/api/users';
import { IUser, QueryKeys } from '../../lib/types';

const ProfileModal = ({
	modalOpened,
	setModalOpened,
	user
}: {
	modalOpened: boolean;
	setModalOpened: Dispatch<SetStateAction<boolean>>;
	user: IUser;
}) => {
	const [profilePicture, setProfilePicture] = useState<File | null>(null);
	const [coverPicture, setCoverPicture] = useState<File | null>(null);

	const { firstName, lastName, workplace, city, country, relationshipStatus } = user;

	const [formData, setFormData] = useState({
		firstName,
		lastName,
		workplace: workplace || '',
		city: city || '',
		country: country || '',
		relationshipStatus: relationshipStatus || '',
		profilePicture: user.profilePicture,
		coverPicture: user.coverPicture
	});

	const [coverProgress, setCoverProgress] = useState(0);
	const [profileProgress, setProfileProgress] = useState(0);
	const [uploading, setUploading] = useState(false);

	const { colorScheme, colors } = useMantineTheme();
	const queryClient = useQueryClient();

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const img = e.target.files[0];
			e.target.name === 'profile' ? setProfilePicture(img) : setCoverPicture(img);
		}
	};

	const uploadFile = (file: File, urlType: 'profilePicture' | 'coverPicture') => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				/* eslint-disable-next-line max-len */
				urlType === 'profilePicture'
					? setProfileProgress(Math.round(progress))
					: setCoverProgress(Math.round(progress));
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						setUploading(true);
						console.log('Upload is running');
						break;
					default:
						break;
				}
			},
			(error) => {
				throw error;
			},
			() => {
				setUploading(false);
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setFormData((prev) => {
						return { ...prev, [urlType]: downloadURL };
					});
				});
			}
		);
	};

	/* eslint-disable-next-line max-len */
	const mutation = useMutation<IUser, AxiosError, Parameters<typeof updateUser>['0']>(updateUser, {
		onSuccess: () => {
			queryClient.invalidateQueries([QueryKeys.USER_PROFILE]);
			queryClient.invalidateQueries([QueryKeys.USER_POSTS]);
			queryClient.invalidateQueries([QueryKeys.USER]);
			setModalOpened(false);
			if (profilePicture) {
				setProfilePicture(null);
			}
			if (coverPicture) {
				setCoverPicture(null);
			}
		}
	});

	useEffect(() => {
		profilePicture && uploadFile(profilePicture, 'profilePicture');
	}, [profilePicture]);

	useEffect(() => {
		coverPicture && uploadFile(coverPicture, 'coverPicture');
	}, [coverPicture]);

	const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutation.mutate({ ...formData, _id: user._id });
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
						onChange={onInputChange}
						type='text'
						placeholder='First Name'
						name='firstName'
						className='info-input'
					/>
					<input
						value={formData.lastName}
						onChange={onInputChange}
						type='text'
						placeholder='Last Name'
						name='lastName'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.workplace}
						onChange={onInputChange}
						type='text'
						placeholder='Works at'
						name='workplace'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.city}
						onChange={onInputChange}
						type='text'
						placeholder='City'
						name='city'
						className='info-input'
					/>
					<input
						value={formData.country}
						onChange={onInputChange}
						type='text'
						placeholder='Country'
						name='country'
						className='info-input'
					/>
				</div>

				<div className='form-item'>
					<input
						value={formData.relationshipStatus}
						onChange={onInputChange}
						type='text'
						className='info-input'
						placeholder='Relationship Status'
						name='relationshipStatus'
					/>
				</div>

				<div className='form-item'>
					<p> Profile image{profileProgress > 0 && `: ${profileProgress}`}</p>
					<input type='file' accept='image/*' name='profile' onChange={onImageChange} />
					<p>Cover image{coverProgress > 0 && `: ${coverProgress}`}</p>
					<input type='file' accept='image/*' name='cover' onChange={onImageChange} />
				</div>

				<button disabled={uploading} className='button info-button' type='submit'>
					Update
				</button>
			</form>
		</Modal>
	);
};

export default ProfileModal;
