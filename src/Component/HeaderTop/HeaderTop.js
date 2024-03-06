import React from "react";
import { ClockIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const HeaderTop = () => {
	return (
		<div className="bg-slate-800">
			<div className="container mx-auto px-20 flex items-center lg:justify-between sm:justify-center ">
				<div className="flex justify-center items-center ">
					<ul className="sm:flex-none md:flex items-center text-center text-white font-bold  opacity-70  me-4">
						<li className="flex items-center justify-center px-2">
							<EnvelopeIcon className="h-8 w-8 text-orange-300" />
							<span>Email: Debos.das.02@gmail.com</span>
						</li>
						<li className="flex items-center justify-center px-2">
							<ClockIcon className="h-8 w-8 text-orange-300" />
							<span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
						</li>
					</ul>
					<ul className="max-sm:hidden  max-xl:hidden xl:block opacity-70 text-white  font-bold relative px-4">
						<li className="mx-2 before:content-0 absolute left-0 top-0 w-[1px] opacity-50  block h-6 bg-white"></li>
						<li className="px-2 inline-block">
							<FaFacebookF />
						</li>
						<li className="px-2  inline-block">
							<FaInstagram />
						</li>
						<li className="px-2 inline-block">
							<FaYoutube />
						</li>
						<li className="mx-2 after:content-0 absolute right-0 top-0 w-[1px] opacity-50 block h-6 bg-white"></li>
					</ul>
				</div>
				<button className="relative text-white font-semibold max-sm:hidden  max-xl:hidden text-2xl bg-orange-300 px-8 py-3 inline-block z-10 ">
					Book an table
				</button>
			</div>
		</div>
	);
};

export default HeaderTop;
