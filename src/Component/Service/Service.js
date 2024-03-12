import React, { useEffect, useState } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";
import serviceImg from "../../assets/serviceBG.jpg";
import { Link } from "react-router-dom";

const Service = () => {
	const [services, setServices] = useState([]);
	const [visibleCard, setVisibleCard] = useState(3);
	useEffect(() => {
		fetch("https://cloud-kitchen-server-o4duyl0zo-debos602.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setServices(data.services));
	}, []);

	const handleSeeAll = () => {
		setVisibleCard(services.length);
	};

	const serviceBackground = {
		backgroundImage: `url(${serviceImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
	};

	return (
		<div className="relative z-10" style={serviceBackground}>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 -z-10"></div>
			<div className="container p-20  text-center mx-auto text-white">
				<h2 className="text-center text-5xl uppercase font-bold mb-5">
					Our <span className="text-orange-300">Service</span> Area
				</h2>
				<p className="text-lg font-semibold w-1/2 mx-auto mb-10">
					Discover delightful dishes crafted with care, from savory Chicken Role
					to comforting Italian Pasta, satisfying every craving
				</p>
				<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
					{services.slice(0, visibleCard).map((service) => (
						<ServiceItem key={service._id} service={service}></ServiceItem>
					))}
				</div>

				<Link
					type="submit"
					onClick={handleSeeAll}
					to="/services"
					className="uppercase text-black font-bold py-6 text-2xl px-20 bg-orange-300 mt-10 rounded-full hover:text-white hover:bg-black duration-500"
				>
					See All
				</Link>
			</div>
		</div>
	);
};

export default Service;
