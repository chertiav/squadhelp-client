import { makeStyles } from 'tss-react/mui';
export const useStyles = makeStyles()(() => {
	return {
		icon: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
	};
});
