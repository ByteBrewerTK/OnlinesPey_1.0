import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
export default function Auth({ children }) {
	const { isAuthenticated } = useAuth();
	if (isAuthenticated) {
		return children;
	}
	return <Navigate to={"/auth/login"} />;
}
