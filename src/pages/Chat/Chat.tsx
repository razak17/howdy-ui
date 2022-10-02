import { useRef, useState } from 'react';
import ChatBox from '../../components/ChatBox/ChatBox';

import Conversation from '../../components/Conversation/Conversation';
import NavIcons from '../../components/NavIcons/NavIcons';
import Searchbar from '../../components/Searchbar/Searchbar';
import { chats } from '../../lib/constants';
import './Chat.css';

const Chat = () => {
	const [chats, setChats] = useState([]);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [sendMessage, setSendMessage] = useState(null);
	const [receivedMessage, setReceivedMessage] = useState(null);

	const user = {
		_id: '1',
		name: 'janedoe'
	};

	const socket = useRef();

	return (
		<div className='Chat'>
			{/* Left Side */}
			<div className='Left-side-chat'>
				<Searchbar />
				<div className='Chat-container'>
					<h2>Chats</h2>
					<div className='Chat-list'>
						{chats.map((chat: any) => (
							<div
								key={chat._id}
								onClick={() => {
									setCurrentChat(chat);
								}}
							>
								<Conversation data={chat} currentUser={user._id} online={true} />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Right Side */}

			<div className='Right-side-chat'>
				<div style={{ width: '20rem', alignSelf: 'flex-end' }}>
					<NavIcons />
				</div>
				<ChatBox
					chat={currentChat}
					currentUser={user._id}
					setSendMessage={setSendMessage}
					receivedMessage={receivedMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
