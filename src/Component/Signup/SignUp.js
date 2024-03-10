import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
	const { createUser, logOut, updateUserName } = useContext(AuthContext);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSigningUp, setIsSigningUp] = useState(false); // State for showing spinner

	const handleEmailRegister = async (event) => {
		event.preventDefault();

		setIsSigningUp(true); // Start showing spinner

		try {
			const user = await createUser(email, password, name);
			await handleUserName(name); // Update user's name
			alert("User created successfully");
			setEmail("");
			setPassword("");
			setName(""); // Clear the name input
			event.target.reset();
			handleLogout();
		} catch (error) {
			console.error("Error registering:", error.message);
		} finally {
			setIsSigningUp(false); // Stop showing spinner
		}
	};

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};

	const handleUserName = (name) => {
		const profile = {
			displayName: name,
		};
		updateUserName(profile)
			.then(() => {})
			.catch((error) => console.log(error));
	};

	return isSigningUp ? (
		<div className="text-center mt-4 min-h-screen flex items-center justify-center">
			<div className="spinner-border text-orange-400 pt-60" role="status">
				<span className="loading loading-spinner loading-lg"></span>
			</div>
		</div>
	) : (
		<div className="bg-gradient-to-b from-orange-200">
			<div className="container mx-auto px-50 py-60 w-full">
				<div className="max-lg:w-4/6 md:w-3/6 xl:w-2/6 mx-auto bg-orange-100 shadow-lg rounded-lg shadow-orange-500/50 p-20">
					<h2 className="text-4xl font-extrabold text-center opacity-95 mb-6">
						Register Here Now!
					</h2>
					<form onSubmit={handleEmailRegister} className="text-center">
						<div className="mb-6">
							<label className="input input-bordered rounded-full flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
								</svg>

								<input
									type="text"
									className="grow"
									placeholder="User Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</label>
						</div>
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
									className="grow"
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
								<path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
							</svg>
							<input
								type="password"
								name="password"
								className="grow"
								placeholder="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</label>

						<button
							type="submit"
							className="px-16  mt-8 inline-block py-4 hover:text-orange-300 hover:bg-black duration-500 bg-orange-300 text-xl font-bold uppercase rounded-full"
						>
							Sign Up
						</button>
					</form>
					<p className="text-xl font-semibold text-center py-5">
						Already Registered ?
						<br />
						<span className="my-4">
							<Link to="/login">Log In</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
