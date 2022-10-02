import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useMe } from '../../context/me';

const AuthRoute = ({ children }: { children: ReactNode }) => {
	const { me } = useMe();
	return <>{me ? <Navigate to='/' replace /> : children}</>;
};

export default AuthRoute;
