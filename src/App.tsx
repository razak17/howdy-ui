import { Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/404/404';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import './App.css'

const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/profile/:id' element={<Profile />} />
				<Route path='/chat' element={<Chat />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};

export default App;
