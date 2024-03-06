import React from "react";
import img1 from "../../assets/Banner/banner-1.jpg";
import img2 from "../../assets/Banner/banner-2.jpg";
import img3 from "../../assets/Banner/banner-3.jpg";
import BannerItem from "../BannerItem/BannerItem";

const Banner = () => {
	const bannerItems = [
		{ image: img1, pre: 3, id: 1, next: 2 },
		{ image: img2, pre: 1, id: 2, next: 3 },
		{ image: img3, pre: 2, id: 3, next: 1 },
	];

	return (
		<div className="w-full carousel">
			{bannerItems.map((banner) => (
				<BannerItem key={banner.id} banner={banner}></BannerItem>
			))}
		</div>
	);
};

export default Banner;
