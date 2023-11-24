import React from 'react';
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Radio,
	RadioGroup,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
//===============================================
import { CREATOR, CUSTOMER, NAME_APP } from '../../../constants';
import { IPropsRegister } from '../../../common/types/auth';
import { useTitle } from '../../../utils/hook';

const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister,
): JSX.Element => {
	useTitle(`${NAME_APP}: Register`);
	const {
		setFirstName,
		setLastName,
		setDisplayName,
		setEmail,
		setPassword,
		setConfirmPassword,
		setRole,
		navigate,
	} = props;

	return (
		<>
			<Typography
				variant="h4"
				marginTop={3}
				marginBottom={1}
				fontFamily={'Poppins'}
				textAlign={'center'}
				color={'#cccccc'}
			>
				CREATE AN ACCOUNT
			</Typography>
			<Typography
				variant="body1"
				marginBottom={2}
				fontFamily={'Poppins'}
				color={'#cccccc'}
			>
				We always keep your name and email address private.
			</Typography>
			<Stack flexDirection={'row'} justifyContent={'space-between'}>
				<TextField
					margin="normal"
					label="First name"
					variant="outlined"
					placeholder="Enter your first name"
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<TextField
					margin="normal"
					label="Last name"
					variant="outlined"
					placeholder="Enter your last name"
					onChange={(e) => setLastName(e.target.value)}
				/>
			</Stack>
			<Stack flexDirection={'row'} justifyContent={'space-between'}>
				<TextField
					margin="normal"
					label="Display name"
					variant="outlined"
					placeholder="Enter your display name"
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<TextField
					margin="normal"
					label="Email address"
					variant="outlined"
					placeholder="Enter your email address"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Stack>
			<Stack flexDirection={'row'} justifyContent={'space-between'}>
				<TextField
					type="password"
					margin="normal"
					label="Password"
					variant="outlined"
					placeholder="Enter your password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					type="password"
					margin="normal"
					label="Password confirmation"
					variant="outlined"
					placeholder="Confirm your password"
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			</Stack>
			<FormControl>
				<RadioGroup
					defaultValue={CUSTOMER}
					name="radio-buttons-group"
					onChange={(e) => setRole(e.target.value)}
				>
					<FormControl>
						<Box
							borderRadius={1}
							border={'1px solid #cccccc'}
							margin={1}
							padding={1.5}
						>
							<FormControlLabel
								value={CUSTOMER}
								label="Join As a Buyer"
								control={<Radio size="small" />}
							/>
							<FormHelperText>
								I am looking for a Name, Logo or Tagline for my business, brand
								or product.
							</FormHelperText>
						</Box>
						<Box
							borderRadius={1}
							border={'1px solid #cccccc'}
							margin={1}
							padding={1}
						>
							<FormControlLabel
								value={CREATOR}
								label="Join As a Creative"
								control={<Radio size="small" />}
							/>
							<FormHelperText>
								I plan to submit name ideas, Logo designs or sell names in
								Domain Marketplace.
							</FormHelperText>
						</Box>
					</FormControl>
				</RadioGroup>
				<FormControlLabel
					required
					control={<Checkbox defaultChecked />}
					label="By clicking this checkbox, you agree to our Terms of Service."
				/>
			</FormControl>
			<Button
				type="submit"
				sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2 }}
				fullWidth={true}
				size={'large'}
				variant="contained"
			>
				Create Account
			</Button>
			<Typography variant="body2" sx={{ fontFamily: 'Poppins' }}>
				Do you have an account?
				<span className="incitingText" onClick={() => navigate('/login')}>
					Sign in
				</span>
			</Typography>
		</>
	);
};

export default RegisterPage;
