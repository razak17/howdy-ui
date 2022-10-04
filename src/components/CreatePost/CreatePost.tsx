import { useRef, useState } from 'react';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import profileImg from '../../assets/buddy.png';
import './CreatePost.css';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { createPost, CreatePostResponseType } from '../../lib/api/post';

const CreatePost = () => {
	const [image, setImage] = useState<File | null>(null);

	const desc = useRef<HTMLTextAreaElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	const loading = false;

	const mutation = useMutation<
		CreatePostResponseType,
		AxiosError,
		Parameters<typeof createPost>['0']
	>(createPost);

	// handle Image Change
	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const img = e.target.files[0];
			setImage(img);
		}
	};

	const handleUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const text = desc?.current?.value;
		if (text) {
			mutation.mutate(text.trim());
		}
	};

	return (
		<div className='create-post'>
			<img src={profileImg} className='profile-image' alt='profileImage' />
			<div>
				<textarea placeholder="What's happening?" required ref={desc} />
				<div className='post-options'>
					<div className='option' onClick={() => imageRef?.current?.click()}>
						<UilScenery />
						Photo
					</div>
					<div className='option'>
						<UilPlayCircle />
						Video
					</div>
					<div className='option'>
						<UilLocationPoint />
						Location
					</div>
					<div className='option'>
						<UilSchedule />
						Shedule
					</div>
					<button className='button ps-button' onClick={handleUpload} disabled={loading}>
						{loading ? 'uploading' : 'Post'}
					</button>
					<div ref={imageRef} style={{ display: 'none' }}>
						<input type='file' onChange={(e) => onImageChange(e)} />
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
