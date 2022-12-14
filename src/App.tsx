import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { MeContextProvider } from './context/me';
import PrivateRoute from './components/AuthRoute/PrivateRoute';
import AuthRoute from './components/AuthRoute/AuthRoute';
import NotFoundPage from './pages/404/404';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Search from './pages/Search/Search';
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
							path='/search'
							element={
								<PrivateRoute>
									<Search />
								</PrivateRoute>
							}
						/>
						<Route
							path='/register'
							element={
								<AuthRoute>
									<Register />
								</AuthRoute>
							}
						/>
						<Route path='/login' element={<Login />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</div>
			</MantineProvider>
		</MeContextProvider>
	);
};

export default App;
