import React from 'react';
import { NAME_APP } from '../../constants';
import { useAuth, useTitle } from '../../utils/hook';
import { IUserJwt } from '../../common/types/auth';
//==============================================

const Home: React.FC = (): JSX.Element => {
	useTitle(NAME_APP);
	const user: IUserJwt | null = useAuth();

	return <div>user: {user?.displayName}</div>;
};

export default Home;
