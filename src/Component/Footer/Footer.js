import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/logo/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
	return (
		<div className="bg-gradient-to-t from-orange-200">
			<footer className="container mx-auto py-20 px-20">
				<div className="text-center flex justify-center">
					<img src={img} className="h-24 w-24" alt="" />
				</div>
				<div className="grid grid-cols-3 max-lg:grid-cols-1 pb-5">
					<div className="text-xl text-center">
						<h2 className="text-2xl font-bold my-4">Opening Times</h2>
						<ul>
							<li className="text-lg font-medium py-1">
								Monday – Thursday: 08AM – 10PM
							</li>
							<li className="text-lg font-medium py-1">
								Friday – Saturday: 10AM–11:30PM
							</li>
							<li className="text-lg font-medium py-1">Sunday: Closed</li>
							<li className="text-lg font-medium py-1">
								Booking Time: 24/7 Hours
							</li>
						</ul>
					</div>
					<div className="text-xl text-center">
						<h2 className="text-2xl font-bold my-4">Opening Times</h2>
						<p className="text-lg font-medium">
							Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc
							orc leo consequat vitae erat gravida lobortis nec et sagittis.
						</p>
					</div>
					<div className="text-xl text-center ">
						<h2 className="text-2xl font-bold my-4">Contact Info</h2>
						<ul>
							<li className="text-lg font-medium py-1">
								Address: New Hyde Park, NY 11040
							</li>
							<li className="text-lg font-medium py-1">
								Email: example@info.com
							</li>
							<li className="text-lg font-medium py-1">
								Call: (+91) 213 666 0027
							</li>
						</ul>
					</div>
				</div>
				<ul className="text-orange-300 text-2xl border-t-2 border-slate-400 font-bold relative px-4 text-center py-10">
					<li className="mx-4 p-5 rounded-full duration-500 hover:bg-black hover:text-white inline-block bg-white">
						<FaFacebookF />
					</li>
					<li className="mx-4  p-5 rounded-full duration-500 hover:bg-black hover:text-white inline-block bg-white">
						<FaInstagram />
					</li>
					<li className="mx-4 p-5 rounded-full duration-500 hover:bg-black hover:text-white inline-block bg-white">
						<FaYoutube />
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
