import { Route, Routes } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './utils/router/privateRoute';
import Home from './pages/home';
import AuthRootComponent from './pages/auth';
import { ColorModeContext, useMode } from './theme';

function App() {
	const [thema, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={thema}>
				<ToastContainer
					position={'bottom-right'}
					hideProgressBar={false}
					closeOnClick
					rtl={false}
					limit={1}
					theme={thema.palette.mode === 'dark' ? 'light' : 'dark'}
				/>
				<CssBaseline />
				<Routes>
					{/* public Routes */}
					<Route path="login" element={<AuthRootComponent />} />
					<Route path="register" element={<AuthRootComponent />} />

					{/* Protected Routes */}
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<Home />} />
					</Route>
					{/* End Protected Routes */}
				</Routes>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
