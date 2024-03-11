import React from "react";
import Banner from "../Banner/Banner";
import Price from "../Price/Price";
import Details from "../Details/Details";
import Service from "../Service/Service";
import useNav from "../../Hooks/useNav";

const Home = () => {
	useNav("Home");
	return (
		<div>
			<Banner></Banner>
			<Service></Service>
			<Details></Details>
			<Price></Price>
		</div>
	);
};

export default Home;
