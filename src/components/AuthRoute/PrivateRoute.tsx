import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useMe } from '../../context/me';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const { me, isLoading } = useMe();

	if (isLoading) {
		return <Loader />;
	}

	return <>{me ? children : <Navigate to='/login' replace />}</>;
};

export default PrivateRoute;
