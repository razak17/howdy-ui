import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import { createPost } from '../../lib/api/post';
import { INewPost, IPost, QueryKeys } from '../../lib/types';
import { defaultProfileImg } from '../../lib/constants';
import app from '../../lib/firebase';
import './CreatePost.css';
import { useMe } from '../../context/me';
import { getUser } from '../../lib/api/users';

const CreatePost = () => {
	const [image, setImage] = useState<File | null>(null);
	const [imageUrl, setImageUrl] = useState('');
	const [uploading, setUploading] = useState(false);

	const queryClient = useQueryClient();
	const { me } = useMe();

	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const img = e.target.files[0];
			setImage(img);
		}
	};

	const uploadImage = (file: File) => {
		const storage = getStorage(app);
		const fileName = new Date().getTime() + file.name;
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				// const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
					setImageUrl(downloadURL);
				});
			}
		);
	};

	const imageRef = useRef<HTMLInputElement>(null);
	const desc = useRef<HTMLTextAreaElement>(null);

	/* eslint-disable-next-line max-len */
	const mutation = useMutation<IPost, AxiosError, Parameters<typeof createPost>['0']>(createPost, {
		onSuccess: () => {
			queryClient.invalidateQueries([QueryKeys.POSTS]);
			if (image) {
				setImage(null);
			}
			if (desc.current?.value) {
				desc.current.value = '';
			}
		}
	});

	useEffect(() => {
		image && uploadImage(image);
	}, [image]);

	const handleUpload = () => {
		const newPost: INewPost = {
			description: ''
		};

		if (image) {
			newPost.image = imageUrl;
		}

		const text = desc.current?.value.trim();
		if (text) {
			newPost.description = text;
			mutation.mutate(newPost);
			console.log({ newPost });
		}
	};

	const { data: user } = useQuery([QueryKeys.USER], () => getUser(`${me?._id}`));

	return (
		<div className='create-post'>
			<img
				src={user?.profilePicture || defaultProfileImg}
				className='profile-image'
				alt='profileImage'
			/>
			<div>
				<div className='text-textarea'>
					<textarea rows={5} placeholder="What's happening?" ref={desc} />
				</div>
				<div className='post-options'>
					<div className='option' onClick={() => imageRef.current?.click()}>
						<UilScenery />
						Photo
					</div>
					<div className='option'>
						<UilPlayCircle />
						Video
					</div>
					<button
						className='button ps-button'
						onClick={handleUpload}
						disabled={mutation.isLoading || uploading}
					>
						{mutation.isLoading || uploading ? 'uploading' : 'Post'}
					</button>
					<div style={{ display: 'none' }}>
						{/* eslint-disable-next-line max-len */}
						<input type='file' accept='image/*' ref={imageRef} onChange={onImageChange} />
					</div>
				</div>

				{image && (
					<div className='preview-image'>
						<UilTimes onClick={() => setImage(null)} />
						<img src={URL.createObjectURL(image)} alt='imagePreview' />
					</div>
				)}
			</div>
		</div>
	);
};

export default CreatePost;
