import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ReviewItem from "../ReviewItem/ReviewItem";

const MyReviews = () => {
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email]);

	return (
		<div className="bg-gradient-to-b from-orange-200">
			<div className="container mx-auto px-80 py-60">
				{reviews?.map((review, index) => (
					<ReviewItem key={review._id} index={index} review={review}></ReviewItem>
				))}
			</div>
		</div>
	);
};

export default MyReviews;
