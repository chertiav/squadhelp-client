import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
//======================================================
import './style.scss';
import instance from '../../utils/axios';
import LoginPage from './login';
import RegisterPage from './register';
import Logo from '../../components/logo';
import { CUSTOMER } from '../../constants';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import ThemeSwitcherComponent from '../../components/them-switcher';
import { showAuthError } from '../../utils/errors';
import { toast } from 'react-toastify';

const AuthRootComponent: React.FC = (): JSX.Element => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [role, setRole] = useState(CUSTOMER);
	const location = useLocation();
	const dispath = useAppDispatch();
	const navigate = useNavigate();

	const checkAuthLocation = (
		elementTrue: JSX.Element,
		elementFalse: JSX.Element,
	): JSX.Element | null => {
		return location.pathname === '/login'
			? elementTrue
			: location.pathname === '/register'
			? elementFalse
			: null;
	};

	const clearField = (): void => {
		setFirstName('');
		setLastName('');
		setDisplayName('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		setRole(CUSTOMER);
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (location.pathname === '/login') {
			try {
				const userData = {
					email,
					password,
				};
				const { data } = await instance.post('auth/login', userData);
				dispath(login(data.accessToken));
				clearField();
				toast.success(data.message);
				navigate('/');
			} catch (e) {
				showAuthError(e);
			}
		} else {
			if (password === confirmPassword) {
				try {
					const userData = {
						firstName,
						lastName,
						displayName,
						email,
						password,
						role,
					};
					const { data } = await instance.post('auth/register', userData);
					dispath(login(data.accessToken));
					clearField();
					toast.success(data.message);
					navigate('/');
				} catch (e) {
					showAuthError(e);
				}
			} else {
				toast.warning(AppErrors.passwordDoNotMatch);
			}
		}
	};

	return (
		<div className="root">
			<div className="header">
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					maxWidth={1200}
					margin={'auto'}
					marginTop={3}
					marginBottom={2}
					paddingLeft={5}
					paddingRight={5}
				>
					<Logo />
					<ThemeSwitcherComponent />
				</Box>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<Box
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					flexDirection={'column'}
					maxWidth={600}
					margin={'auto'}
					padding={5}
					borderRadius={5}
					boxShadow={'1px 1px 5px #ccc'}
				>
					{checkAuthLocation(
						<LoginPage
							setEmail={setEmail}
							setPassword={setPassword}
							navigate={navigate}
						/>,
						<RegisterPage
							setFirstName={setFirstName}
							setLastName={setLastName}
							setDisplayName={setDisplayName}
							setEmail={setEmail}
							setPassword={setPassword}
							setConfirmPassword={setConfirmPassword}
							setRole={setRole}
							navigate={navigate}
						/>,
					)}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;
