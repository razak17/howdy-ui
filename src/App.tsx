import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import PrivateRoute from './components/AuthRoute/PrivateRoute';
import AuthRoute from './components/AuthRoute/AuthRoute';
import { MeContextProvider } from './context/me';
import NotFoundPage from './pages/404/404';
import Auth from './pages/Auth/Auth';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import './App.css';

const App = () => {
	return (
		<MeContextProvider>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'light'
				}}
			>
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
						<Route
							path='/'
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route
							path='/home'
							element={
								<PrivateRoute>
									<Home />
								</PrivateRoute>
							}
						/>
						<Route
							path='/profile/:id'
							element={
								<PrivateRoute>
									<Profile />
								</PrivateRoute>
							}
						/>
						<Route
							path='/chat'
							element={
								<PrivateRoute>
									<Chat />
								</PrivateRoute>
							}
						/>
						<Route
							path='/auth'
							element={
								<AuthRoute>
									<Auth />
								</AuthRoute>
							}
						/>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</MantineProvider>
		</MeContextProvider>
	);
};

export default App;
