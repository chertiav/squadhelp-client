import { useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
//=====================================================
import { AppDispatch, RootState } from '../../store';
import { selectCurrentToken } from '../../store/slice/auth';
import { IJwtPayload, IUserJwt } from '../../common/types/auth';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelectore: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = (): IUserJwt | null => {
	const token: string | null = useAppSelectore(selectCurrentToken);
	if (token) {
		const jwtPayload: IJwtPayload = jwtDecode(token);
		return jwtPayload.user;
	}

	return null;
};

export const useTitle = (title: string): void => {
	useEffect((): (() => void) => {
		const prevTitle = document.title;
		document.title = title;
		return () => (document.title = prevTitle);
	}, [title]);
};
