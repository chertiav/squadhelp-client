export interface IPropsLogin {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	navigate: (to: string) => void;
}

export interface IPropsRegister {
	setFirstName: (value: string) => void;
	setLastName: (value: string) => void;
	setDisplayName: (value: string) => void;
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setConfirmPassword: (value: string) => void;
	setRole: (value: string) => void;
	navigate: (to: string) => void;
}

export interface IAuthState {
	token: string | null;
}

export interface IUserJwt {
	id: number;
	role: string;
	displayName: string;
	avatar: string;
}
export interface IJwtPayload {
	user: IUserJwt;
	iat: number;
	exp: number;
}
