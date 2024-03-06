import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/site-section/shape-2.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import paralaxImage from "../../assets/paralax-bg.jpg";
import "../Price/Price.css";

const Price = () => {
	const defaultImage = "https://i.ibb.co/9cm29JM/food1.png";
	const [selectImage, setSelectImage] = useState(defaultImage);
	const FoodPrice = [
		{
			id: "_1",
			img: "https://i.ibb.co/9cm29JM/food1.png",
			name: "Egg Salad",
			price: 10.99,
		},
		{
			id: "_2",
			img: "https://i.ibb.co/VtCcBY0/food2.png",
			name: "Chicken Role",
			price: 8.49,
		},
		{
			id: "_3",
			img: "https://i.ibb.co/tYK3D4C/food3.png",
			name: "Italian Pasta",
			price: 12.79,
		},
		{
			id: "_4",
			img: "https://i.ibb.co/R7Y0gB8/food4.png",
			name: "Fried Chicken Bites",
			price: 15.99,
		},
		{
			id: "_5",
			img: "https://i.ibb.co/Qpjfs9h/food5.png",
			name: "Bread slice",
			price: 9.99,
		},
		{
			id: "_6",
			img: "https://i.ibb.co/D412DWj/food6.png",
			name: "Salmon with Vegetables",
			price: 11.29,
		},
		{
			id: "_7",
			img: "https://i.ibb.co/SdwhLFZ/food7.png",
			name: "Fried Rice",
			price: 14.49,
		},
		{
			id: "_8",
			img: "https://i.ibb.co/QXx9gmr/food8.png",
			name: "vanilla cake",
			price: 7.99,
		},
		{
			id: "_9",
			img: "https://i.ibb.co/cvBpv4v/food9.png",
			name: "Fried Vegetables",
			price: 13.49,
		},
		{
			id: "_10",
			img: "https://i.ibb.co/9YZdbcz/food10.png",
			name: "Meat ball with Pasta",
			price: 10.99,
		},
		{
			id: "_11",
			img: "https://i.ibb.co/kqWWxBN/food11.png",
			name: "Chicken Bites",
			price: 16.99,
		},
	];

	const handleClick = (img) => {
		setSelectImage(img);
	};

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
								{FoodPrice.map((food, index) => (
									<li
										key={food.id}
										onClick={() => handleClick(food.img)}
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
							<img src={selectImage} className="w-full" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Price;
