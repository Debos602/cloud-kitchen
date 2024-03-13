import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/site-section/shape-2.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import paralaxImage from "../../assets/paralax-bg.jpg";

import "../Price/Price.css";

const Price = () => {
	const [foodList, setFoodList] = useState([]);
	const [photo, setPhoto] = useState("https://i.ibb.co/9cm29JM/food1.png"); // Set default image
	useEffect(() => {
		fetch("https://cloud-kitchen-server-sand.vercel.app/foodlist")
			.then((res) => res.json())
			.then((data) => setFoodList(data));
	}, []);

	const siteImageStyle = {
		backgroundImage: `url(${bgImage})`,
		backgroundPosition: "center",
		width: "80%",
		margin: "80px auto",
	};
	const bgImageStyle = {
		backgroundImage: `url(${paralaxImage})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		width: "100%",
	};

	const handleMouseEnter = (photoUrl) => {
		setPhoto(photoUrl);
	};

	return (
		<div>
			<div className="relative z-10" style={bgImageStyle}>
				<div className="absolute top-0 left-0 h-full w-full bg-black -z-10 opacity-50"></div>
				<div className="container mx-auto px-20 py-32">
					<div className="text-center w-3/4 mx-auto">
						<h2 className="text-7xl font-bold mb-10 text-white">
							List of <span className="text-6xl text-orange-300">Our Food</span>
						</h2>
						<p className="text-2xl font-semibold text-white">
							Delicious dishes at affordable prices, perfect for any budget.
							Quality ingredients, flavorful options, and satisfying portions
							await you.
						</p>
					</div>
					<div className="grid grid-cols-2 max-lg:grid-cols-1">
						<div className="price-list">
							<ul className="py-20 px-10 list">
								{foodList?.map((food, index) => (
									<li
										key={food.id}
										onMouseEnter={() => handleMouseEnter(food.photo)} // Change photo on hover
										className={`text-lg flex items-center justify-between  py-2  border-t-2 border-white transition-colors ${
											index === 10 ? "border-b-2" : ""
										} `}
									>
										<div className="flex font-bold justify-center items-center text-white opacity-80">
											<span className="ps-4">{index + 1}. </span>
											<Link className="ps-4">{food.name}</Link>
										</div>
										<span className="text-xl pe-4 text-white icon">
											<FaArrowTrendUp />
										</span>
									</li>
								))}
							</ul>
						</div>
						<div
							className="flex items-center justify-center relative"
							style={siteImageStyle}
						>
							<div className="absolute top-0 left-0 h-full w-full bg-white opacity-70 -z-10 rounded-lg"></div>
							<img src={photo} className="w-full" alt="" />{" "}
							{/* Use photo state for src */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Price;
