import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import HeaderTop from "../HeaderTop/HeaderTop";
import "./header.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	// console.log(user);

	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		const header = document.getElementById("header");

		const handleScroll = () => {
			if (window.scrollY >= 0) {
				header.classList.remove("top-[72px]", "absolute");
				header.classList.add("top-0", "fixed");
			} else {
				header.classList.remove("top-0", "fixed");
				header.classList.add("top-[72px]", "absolute");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			id="header"
			className="absolute top-[0px] bg-white w-full z-20 border-b hover:text-orange-300-2 border-slate-400"
		>
			<HeaderTop></HeaderTop>
			<div className="lg:container mx-auto lg:px-20 py-2 ">
				<div className="flex w-full justify-between items-center relative">
					<Link to="/">
						<img className="h-24 max-lg:ps-10" src={logo} alt="" />
					</Link>
					<ul
						onClick={() => setOpen(!open)}
						className={`lg:flex text-2xl font-bold uppercase max-lg:h-screen max-lg:w-full max-lg:fixed md:top-[144px] sm:top-[175px] max-sm:top-[175px] max-lg:bg-white min-lg:static transition-all duration-300 header-list ${
							open ? "right-0" : "right-[-1000px]"
						}`}
					>
						<li className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300">
							<Link className="px-4" to="/">
								Home
							</Link>
						</li>
						{user?.uid ? (
							<li className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300">
								<Link className="px-4" to="/addservice">
									Add Service
								</Link>
							</li>
						) : (
							""
						)}

						<li className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300">
							<Link className="px-4" to="/myreview">
								My Review
							</Link>
						</li>

						<li className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300">
							<Link className="px-4" to="/Contact">
								Contact
							</Link>
						</li>
						{user?.uid ? (
							<li
								onClick={handleLogout}
								className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300"
							>
								<Link className="px-4" to="/login">
									logOut
								</Link>
							</li>
						) : (
							<li className="max-lg:py-2 max-lg:border-b-2 max-lg:border-text-black hover:text-orange-300">
								<Link className="px-4" to="/login">
									LogIn
								</Link>
							</li>
						)}
					</ul>

					<div
						className="h-20 w-20 lg:hidden flex align-middle max-lg:pe-10"
						onClick={() => setOpen(!open)}
					>
						{open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
					</div>

					<button className="px-10 py-5 max-lg:hidden bg-orange-300 hover:text-orange-300 hover:bg-black duration-500 text-xl font-bold uppercase rounded-full">
						<Link to="/blog">Blog</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
