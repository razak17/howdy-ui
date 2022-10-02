import { useRef, useState } from 'react';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import profileImg from '../../assets/profile.jpg';
import './CreatePost.css';

const CreatePost = () => {
	const [image, setImage] = useState<File | null>(null);

	const desc = useRef<HTMLTextAreaElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);

	const loading = false;

	// handle Image Change
	const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const img = e.target.files[0];
			setImage(img);
		}
	};

	const handleUpload = () => {
		alert('handle upload');
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
						{loading ? 'uploading' : 'Share'}
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
