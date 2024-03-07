import React from "react";
import bgImage from "../../assets/site-section/page-title.jpg";
import { SlArrowDown } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const ServiceDetails = () => {
	const { _id, description, img, name, price, ratings } = useLoaderData();
	// console.log(description);
	const backgroundImageStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
	};
	return (
		<>
			<div className="relative z-10" style={backgroundImageStyle}>
				<div className="absolute inset-0 bg-black opacity-50 -z-10 mix-blend-multiply"></div>
				<div className="container px-20 mx-auto py-60">
					<div className="flex flex-col justify-center items-center pt-20 text-white">
						<h2 className="tracking-widest text-white text-5xl font-bold">
							Food Details
						</h2>
						<span className="font-extrabold text-4xl mt-4">
							<SlArrowDown />
						</span>
					</div>
				</div>
			</div>
			<div className="container mx-auto px-20 py-20 bg-gradient-to-b from-orange-200">
				<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8">
					<div className="text-2xl col-span-1 border-2 border-orange-400 rounded-xl p-5">
						<h2 className="text-4xl text-center py-2 tracking-wide font-bold">
							Description
						</h2>
						<p className="text-xl">{description}</p>
					</div>
					<Review
						_id={_id}
						img={img}
						ratings={ratings}
						name={name}
						price={price}
					></Review>
				</div>
			</div>
		</>
	);
};

export default ServiceDetails;
