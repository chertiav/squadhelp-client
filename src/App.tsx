import { Route, Routes } from 'react-router';

import PrivateRoute from './utils/router/privateRoute';
import Home from './pages/home';
import AuthRootComponent from './pages/auth';

function App() {
	return (
		<Routes>
			<Route element={<PrivateRoute />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="login" element={<AuthRootComponent />} />
			<Route path="register" element={<AuthRootComponent />} />
		</Routes>
	);
}

export default App;
