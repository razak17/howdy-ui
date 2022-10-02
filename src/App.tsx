import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import NotFoundPage from './pages/404/404';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import './App.css';

const App = () => {
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
			<div
				className={
					window.location.href === 'http://localhost:3000/chat'
						? 'container chat-home'
						: 'container main-home'
				}
			>
				<div className='blur' style={{ top: '-18%', right: '0' }}></div>
				<div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/profile/:id' element={<Profile />} />
					<Route path='/chat' element={<Chat />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</MantineProvider>
	);
};

export default App;
