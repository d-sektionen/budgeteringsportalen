import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();
export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload };
		case 'LOGOUT':
			return { ...state, user: undefined };
		case 'AUTH_READY':
			return { ...state, user: action.payload, authFinished: true };
		default:
			return state;
	}
};

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: undefined,
		authFinished: false,
	});

	console.log(state);
	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
export default AuthContextProvider;
