import { useEffect, useRef, useState } from 'react';
import InputEmoji from 'react-input-emoji';

import profileImg from '../../assets/profile.jpg';

import './ChatBox.css';

const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }: any) => {
	const [userData, setUserData] = useState<any>(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');

	const handleChange = (newMessage: any) => {
		setNewMessage(newMessage);
	};

	const scrollRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLInputElement>(null);

	const handleSend = () => {
		alert('handle send');
	};

	return (
		<>
			<div className='chat-box-container'>
				{chat ? (
					<>
						{/* chat-header */}
						<div className='chat-header'>
							<div className='follower'>
								<div>
									<img
										src={profileImg}
										alt='Profile'
										className='follower-image'
										style={{ width: '50px', height: '50px' }}
									/>
									<div className='name' style={{ fontSize: '0.9rem' }}>
										<span>
											{userData?.firstname} {userData?.lastname}
										</span>
									</div>
								</div>
							</div>
							<hr
								style={{
									width: '95%',
									border: '0.1px solid #ececec',
									marginTop: '20px'
								}}
							/>
						</div>
						{/* chat-body */}
						<div className='chat-body'>
							{messages.map((message: any) => (
								<>
									<div
										ref={scrollRef}
										className={message.senderId === currentUser ? 'message own' : 'message'}
									>
										<span>{message.text}</span> <span>{message.createdAt}</span>
									</div>
								</>
							))}
						</div>
						{/* chat-sender */}
						<div className='chat-sender'>
							<div onClick={() => imageRef?.current?.click()}>+</div>
							<InputEmoji value={newMessage} onChange={handleChange} />
							<div className='send-button button' onClick={handleSend}>
								Send
							</div>
							<input type='file' name='' id='' style={{ display: 'none' }} ref={imageRef} />
						</div>{' '}
					</>
				) : (
					<span className='chat-box-empty-message'>Tap on a chat to start conversation...</span>
				)}
			</div>
		</>
	);
};

export default ChatBox;
