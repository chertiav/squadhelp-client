import axios from 'axios';
//========================================
import { BASE_URL } from '../../constants';

const instance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
	headers: { 'Content-Type': 'application/json' },
});

export default instance;
