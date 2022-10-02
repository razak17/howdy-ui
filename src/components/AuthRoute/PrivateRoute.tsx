import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useMe } from '../../context/me';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const { user } = useMe();
	console.log({ user });
	return <>{user ? children : <Navigate to='/auth' replace />}</>;
};

export default PrivateRoute;
