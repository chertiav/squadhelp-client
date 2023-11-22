import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from '../../store/slice/auth';

const PersistLogin = () => {
	const token = useSelector(selectCurrentToken);

	return <div>index</div>;
};

export default PersistLogin;
