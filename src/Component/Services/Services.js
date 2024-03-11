import React, { useEffect, useState } from "react";
import serviceImg from "../../assets/serviceBG.jpg";
import ServiceItem from "../ServiceItem/ServiceItem";
import useNav from "../../Hooks/useNav";

const Services = () => {
	useNav("Services");
	const [services, setServices] = useState([]);
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [size, setSize] = useState(3);
	const pages = Math.ceil(count / size);

	useEffect(() => {
		fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
			.then((res) => res.json())
			.then((data) => {
				setServices(data.services);
				setCount(data.count);
			});
	}, [page, size]);

	const serviceBackground = {
		backgroundImage: `url(${serviceImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
	};

	// Function to handle page change
	const handlePageChange = (newPage, newSize) => {
		setPage(newPage);
		setSize(newSize);
	};

	return (
		<div className="relative z-10 pt-[220px]" style={serviceBackground}>
			<div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 -z-10"></div>
			<div className="container text-center mx-auto px-20 text-white">
				<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-10">
					{services?.map((service) => (
						<ServiceItem key={service._id} service={service}></ServiceItem>
					))}
				</div>
				<div className="pb-[50px]">
					{/* Display page numbers as buttons */}
					<p className="text-xl mb-5 font-bold">
						Currently selected page: {page + 1}
					</p>
					{Array.from({ length: pages }).map((_, index) => (
						<button
							className={`btn bg-orange-400 mx-2 text-xl hover:bg-orange-600 ${
								page === index && "bg-orange-600 text-white"
							}`}
							key={index}
							onClick={() => handlePageChange(index, size)}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
