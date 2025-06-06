import { createContext, ReactNode, useContext } from 'react';
import { RefetchOptions, RefetchQueryFilters, useQuery } from 'react-query';
import { Loader } from '@mantine/core';
import { getMe, MeResponseType } from '../lib/api/users';
import { QueryKeys } from '../lib/types';

const MeContext = createContext<{
	me: MeResponseType | undefined;
	isLoading: boolean;
	refetch: <TPageData>(
		/* eslint-disable-next-line no-unused-vars */
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => any;
	remove?: () => void;
	// @ts-ignore
}>({ me: undefined });

const MeContextProvider = ({ children }: { children: ReactNode }) => {
	const { data, refetch, isLoading } = useQuery([QueryKeys.ME], getMe);

	return (
		<MeContext.Provider
			value={{ me: data as MeResponseType, refetch, isLoading }}
		>
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
