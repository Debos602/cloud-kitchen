import React from "react";
import { Link } from "react-router-dom";
import "./Details.css";
import img from "../../assets/site-section/about-1.png";

const Details = () => {
	return (
		<div className="details-header">
			<div className="container mx-auto px-20">
				<div className="grid grid-cols-2 max-lg:grid-cols-1 ">
					<div className="pt-20 ">
						<img src={img} className="w-full" alt="" />
					</div>

					<div className="right-side">
						<div className="flex  items-center h-full">
							<div className="py-20 px-10">
								<h2 className="text-5xl font-bold tex-center mb-5 uppercase">
									Our Food <span className="text-orange-300">Details</span>
								</h2>
								<p className="text-xl text-left ">
									Discover intricate details of our culinary offerings. From
									appetizing starters to sumptuous mains and indulgent desserts,
									our menu promises an unforgettable gastronomic journey. Each
									dish is meticulously crafted using the finest ingredients,
									combining flavors and textures to tantalize your taste buds.
									Whether you crave comfort classics or innovative creations,
									our diverse selection caters to every palate. Explore our food
									with passion and delight in every bite, as we invite you to
									savor the essence of our culinary expertise.
								</p>
								<button className="px-10 mt-8 inline-block py-4 hover:text-orange-300 hover:bg-black duration-500 bg-orange-300 text-xl font-bold uppercase rounded-full">
									<Link>Our Details</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
