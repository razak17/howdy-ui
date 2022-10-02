import { createContext, ReactNode, useContext } from 'react';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import { Loader } from '@mantine/core';
import { getMe } from '../lib/api/users';
import { IUser, QueryKeys } from '../lib/types';

const MeContext = createContext<{
	user: IUser | undefined;
	refetch?: <TPageData>(
		/* eslint-disable-next-line no-unused-vars */
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
		/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	) => any;
	remove?: () => void;
}>({ user: undefined });

const MeContextProvider = ({ children }: { children: ReactNode }) => {
	const { data, refetch, isLoading } = useQuery([QueryKeys.ME], getMe);
  console.log({data})

	return (
		<MeContext.Provider value={{ user: data as IUser, refetch }}>
			{isLoading ? (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '2rem',
						marginTop: '3rem'
					}}
				>
					<Loader />
				</div>
			) : (
				children
			)}
		</MeContext.Provider>
	);
};

const useMe = () => useContext(MeContext);

export { MeContextProvider, useMe };
