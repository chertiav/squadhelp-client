import React from 'react';
import { Link } from 'react-router-dom';
//=======================================
import LogoImage from '../../../assets/images/logo/logo_white.svg';

const Logo: React.FC = (): JSX.Element => {
	return (
		<Link to={'/'}>
			<img src={LogoImage} alt={'logo'} />
		</Link>
	);
};

export default Logo;
