// AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setAuthenticated] = useState(false);

	const logout = () => {
		setAuthenticated(false);
		localStorage.removeItem("accessToken");
	};
	const login = () => {
		if (localStorage.getItem("accessToken")) {
			setAuthenticated(true);
			
		}else{
			logout();
		}

	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
