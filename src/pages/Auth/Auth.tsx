import Logo from '../../assets/logo.png';

const Auth = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='auth'>
			<div className='auth-left'>
				<img src={Logo} alt='' />

				<div className='web-name'>
					<h1> Howwdy</h1>
					<p>Explore the ideas throughout the world!</p>
				</div>
			</div>
			<div className='auth-right'>{children}</div>
		</div>
	);
};

export default Auth;
