import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Login from './Login';
import Register from './Register';

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<div className='auth'>
			<div className='auth-left'>
				<img src={Logo} alt='' />

				<div className='web-name'>
					<h1> Howwdy</h1>
					<p>Explore the ideas throughout the world!</p>
				</div>
			</div>
			<div className='auth-right'>
				{isSignUp ? <Register setIsSignUp={setIsSignUp} /> : <Login setIsSignUp={setIsSignUp} />}
			</div>
		</div>
	);
};

export default Auth;
