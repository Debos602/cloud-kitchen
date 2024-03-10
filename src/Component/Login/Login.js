import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGooglePlus, FaLongArrowAltRight } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
	const { user, facebookLogin, emailLogin, googleLogin, forgetPassword } =
		useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	console.log(true);
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	useEffect(() => {
		if (user?.uid) {
			navigate("/");
		}
	}, [user?.uid, navigate]);

	const handleFacebookLogin = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(async () => {
			try {
				await facebookLogin();
			} catch (error) {
				console.error("Error logging in with Facebook:", error.message);
			} finally {
				setIsLoading(false);
			}
		}, 1000); // <- Set the delay time here
	};

	const handleGoogleProvider = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setTimeout(async () => {
			try {
				await googleLogin();
				navigate(from, { replace: true });
			} catch (error) {
				console.error("Error logging in with Google:", error.message);
			} finally {
				setIsLoading(false);
			}
		}, 1000); // <- Set the delay time here
	};

	const handleLoginFormSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			await emailLogin(email, password);
			alert("Log In successful");
			setEmail("");
			setPassword("");
			navigate(from, { replace: true });
		} catch (error) {
			console.error("Error logging in:", error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleForgetPassword = (event) => {
		event.preventDefault();
		setIsLoading(true);
		forgetPassword(email)
			.then(() => {
				alert("Password reset email sent");
			})
			.catch((error) => alert("Input a valid email"))
			.finally(() => setIsLoading(false));
	};

	return isLoading ? (
		<div className="text-center mt-4 min-h-screen flex items-center justify-center">
			<div className="spinner-border text-orange-400 pt-60" role="status">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		</div>
	) : (
		<div className="bg-gradient-to-b from-orange-200">
			<div className="container mx-auto max-lg:px-50 py-60 w-full">
				<div className="max-lg:w-4/6 md:w-3/6 xl:w-2/6 mx-auto rounded-lg bg-orange-100 shadow-lg shadow-orange-500/50 p-20">
					<h2 className="text-4xl font-extrabold text-center opacity-95 mb-6">
						Log In Now!
					</h2>
					<form onSubmit={handleLoginFormSubmit} className="text-center">
						<div className="mb-6">
							<label className="input input-bordered rounded-full flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
									<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
								</svg>
								<input
									type="email"
									name="email"
									className="grow "
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
						</div>
						<label className="input input-bordered rounded-full flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								type="password"
								name="password"
								className="grow"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
						<button
							type="submit"
							className="px-16  mt-8 inline-block py-4 hover:text-orange-300 hover:bg-black duration-500 bg-orange-300 text-xl font-bold uppercase rounded-full"
						>
							Login
						</button>
					</form>
					<div className="text-xl font-semibold text-center py-5">
						<p>Log In with</p>

						<span className="my-4 flex justify-around text-3xl w-3/4 mx-auto">
							<button onClick={handleFacebookLogin}>
								<FaFacebook />
							</button>
							<button onClick={handleGoogleProvider}>
								<FaGooglePlus />
							</button>
							<Link to="/">
								<FaTwitter />
							</Link>
						</span>

						<span className=" my-4 flex justify-center items-center">
							<Link to="/signup">Register</Link>
							<FaLongArrowAltRight className="ms-4 leading-5" />
						</span>

						<span className="my-4">
							<Link to="/login" onClick={handleForgetPassword}>
								Forget Password?
							</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
