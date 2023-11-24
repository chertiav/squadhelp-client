import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
//==================================================
import { IPropsLogin } from '../../../common/types/auth';
import { useTitle } from '../../../utils/hook';
import { NAME_APP } from '../../../constants';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	useTitle(`${NAME_APP}: Login`);
	const { setEmail, setPassword, navigate } = props;

	return (
		<>
			<Typography
				variant="h4"
				padding={3}
				fontFamily={'Poppins'}
				textAlign={'center'}
				color={'#cccccc'}
			>
				LOGIN TO YOUR ACCOUNT
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email address"
				variant="outlined"
				placeholder="Enter your email address"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				type="password"
				fullWidth={true}
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Enter your password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button
				type="submit"
				sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2 }}
				fullWidth={true}
				size={'large'}
				variant="contained"
			>
				LOGIN
			</Button>
			<Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
				Don't have an account?
				<span className="incitingText" onClick={() => navigate('/register')}>
					Sign up
				</span>
			</Typography>
		</>
	);
};

export default LoginPage;
