import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
//==============================================
import { ErrorResponse } from '../../common/types/errors';

export const showAuthError = (error: unknown) => {
	const axiosError = error as AxiosError;

	if ((axiosError.response?.data as ErrorResponse).message) {
		toast.error((axiosError.response?.data as ErrorResponse).message);
		return;
	}
	toast.error((error as Error).message);
};
