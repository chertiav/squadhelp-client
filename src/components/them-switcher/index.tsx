import React, { useContext } from 'react';
import {  IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { ColorModeContext } from '../../theme';
import { useStyles } from './styles';

const ThemeSwitcherComponent: React.FC = (): JSX.Element => {
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const { classes } = useStyles();
	return (
		<IconButton onClick={colorMode.toggleColorMode} className={classes.icon}>
			{theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
		</IconButton>
	);
};

export default ThemeSwitcherComponent;
