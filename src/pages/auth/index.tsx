import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
//======================================================
import './style.scss';
import instance from '../../utils/axios';
import LoginPage from './login';
import RegisterPage from './register';
import Logo from '../../components/UI/logo';
import { CUSTOMER } from '../../constants';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';

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
				navigate('/');
			} catch (e) {
				console.log(e);
				return (e as Error).message;
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
					navigate('/');
				} catch (e) {
					console.log(e);
					return (e as Error).message;
				}
			} else {
				throw new Error(AppErrors.passwordDoNotMatch);
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
					padding={5}
				>
					<Logo />
					<Button variant="outlined">
						{checkAuthLocation(
							<Link to="/register">Signup</Link>,
							<Link to="/login">Login</Link>,
						)}
					</Button>
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
						<LoginPage setEmail={setEmail} setPassword={setPassword} />,
						<RegisterPage
							setFirstName={setFirstName}
							setLastName={setLastName}
							setDisplayName={setDisplayName}
							setEmail={setEmail}
							setPassword={setPassword}
							setConfirmPassword={setConfirmPassword}
							setRole={setRole}
						/>,
					)}
				</Box>
			</form>
		</div>
	);
};

export default AuthRootComponent;
