import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/public/Home";
import Loader from "./components/ui/loader/Loader";
import { useAuth } from "./context/AuthProvider";
import Auth from "./components/shared/Auth";

const Login = lazy(() => import("./pages/auth/Login"));
const PageNotFound = lazy(() => import("./pages/error/PageNotFound"));
const Dashboard = lazy(() => import("./pages/protected/Dashboard"));

export default function App() {
	const { isAuthenticated, login, logout } = useAuth();
	return (
		<section className="relative overflow-x-hidden">
			<Navbar />

			<Suspense
				fallback={
					<section className="grid w-screen h-[100dvh] bg-[#1A2238] place-items-center">
						<Loader />
					</section>
				}
			>
				<Routes>
					{/* <Route path="/" element={<Home />} /> */}
					<Route path="/" element={<Home />} />
					
					<Route path="/auth/login" element={<Login />} />

					<Route
						path="/dashboard"
						element={
							<Auth>
								<Dashboard />
							</Auth>
						}
					/>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>

			<Footer />
		</section>
	);
}
