import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
	const { _id, img, name, price, description, ratings } = service;
	// console.log(name);
	return (
		<div className="card glass mb-0 shadow-lg hover:shadow-orange-200/100 duration-500">
			<PhotoProvider>
				<PhotoView src={img}>
					<figure>
						<img src={img} className="object-cover w-2/4 pt-4" alt="car!" />
					</figure>
				</PhotoView>
			</PhotoProvider>
			<div className="card-body pt-0">
				<h2 className="card-title text-3xl text-orange-300 text-center uppercase ">
					<span className="text-center w-full">{name}</span>
				</h2>
				<div className="flex justify-between items-center">
					<span className="  font-normal">Price: {price}</span>
					<span className=" font-normal">Ratings: {ratings}</span>
				</div>
				<p className="text-base font-medium text-left bg-glass p-2 border-2 rounded-xl">
					{description.split(" ").slice(0, 20).join(" ")}
				</p>

				<div className="card-actions justify-center">
					<Link to={`/services/${_id}`}>
						<button className="btn text-2xl rounded-full px-10 bg-orange-300 mt-5 hover:text-white hover:bg-black duration-300">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceItem;
