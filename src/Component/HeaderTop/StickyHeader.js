import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const StickyHeader = () => {
	return (
		<div className="md:hidden">
			<div className="flex w-full justify-between items-center">
				<Link to="/">
					<img className="h-24" src={logo} alt="" />
				</Link>
				<ul className="flex text-2xl font-bold uppercase">
					<li>
						<Link className="px-4" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="px-4" to="/addservice">
							AddService
						</Link>
					</li>

					<li>
						<Link className="px-4" to="/myreview">
							MyReview
						</Link>
					</li>
					<li>
						<Link className="px-4" to="/Contact">
							Contact
						</Link>
					</li>
					<li>
						<Link className="px-4" to="/login">
							LogIn
						</Link>
					</li>
				</ul>
				<button className=" px-6 py-3  bg-orange-300 text-2xl font-bold uppercase rounded-full">
					Blog
				</button>
			</div>
		</div>
	);
};

export default StickyHeader;
