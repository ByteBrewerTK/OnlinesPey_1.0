import { useForm } from "react-hook-form";
import axios from "axios"; // Import Axios
import Img1 from "../../assets/LOGO22NEW.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
// import { login } from "../../services/authService";
// import { useAuth } from "../../context/AuthProvider";
// import { useEffect } from "react";

export default function Login() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const {login} = useAuth();

	
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();


	// useEffect(() => {
	// 	login();
		
	// }, [login]);

	

	const onSubmit = async (formData) => {
		setIsLoading(true);
		try {
			// Make an API call using Axios
			const response = await axios.post(
				"http://localhost:4000/api/auth",
				formData
			);
			const accessToken = response.data.accessToken;

			// Handle the response
			localStorage.setItem("accessToken", accessToken);
			login();
			navigate("/dashboard");
			
		} catch (error) {
			// Handle error
			// navigate("/error");
			console.error("API Error:", error);
		}
		setIsLoading(false);
		
	};

	return (
		<>
			<div className="flex flex-col justify-center flex-1 h-screen px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="w-auto h-10 mx-auto"
						src={Img1}
						alt="Your Company"
					/>
					<h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Mobile No.
							</label>
							<div className="mt-2">
								<input
									id="phone"
									name="phone"
									type="tel" // Change type to "tel"
									autoComplete="tel"
									required
									{...register("phone", {
										required: "Phone number is required",
										pattern: {
											value: /^[0-9]*$/, // Use a pattern suitable for phone numbers
											message: "Invalid phone number",
										},
									})}
									className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
										errors.phone ? "border-red-500" : ""
									}`}
								/>
								{errors.phone && (
									<p className="text-red-500">
										{errors.phone.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 0,
											message:
												"Password must be at least 6 characters",
										},
									})}
									className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
										errors.password ? "border-red-500" : ""
									}`}
								/>
								{errors.password && (
									<p className="text-red-500">
										{errors.password.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<button
								type="submit"
								disabled = {isLoading}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{isLoading ? "Loading..." : "Sign in"}
							</button>
						</div>
					</form>

					{/* <p className="mt-10 text-sm text-center text-gray-500">
						Not a member?{" "}
						<a
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Start a 14 day free trial
						</a>
					</p> */}
				</div>
			</div>
		</>
	);
}
