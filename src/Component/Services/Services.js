import React, { useEffect, useState } from "react";
import serviceImg from "../../assets/serviceBG.jpg";
import ServiceItem from "../ServiceItem/ServiceItem";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
			});
	}, []);

	const serviceBackground = {
		backgroundImage: `url(${serviceImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
	};
	return (
		<div className="relative z-10 py-36" style={serviceBackground}>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 -z-10"></div>
			<div className="container px-20 text-center mx-auto py-20 text-white">
				<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
					{services?.map((service) => (
						<ServiceItem key={service._id} service={service}></ServiceItem>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
