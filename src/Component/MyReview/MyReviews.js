import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ReviewItem from "../ReviewItem/ReviewItem";
import useNav from "../../Hooks/useNav";

const MyReviews = () => {
	const { user, logOut } = useContext(AuthContext);
	const [reviews, setReviews] = useState([]);
	useNav("My-Review");

	useEffect(() => {
		fetch(
			`https://cloud-kitchen-server-sand.vercel.app/reviews?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem("cloud-kitchen")}`,
				},
			}
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					logOut()
						.then(() => {})
						.catch((error) => console.log(error));
				}
				return res.json();
			})
			.then((data) => {
				// console.log("recieved", data);
				setReviews(data);
			});
	}, [user?.email, logOut]);

	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure? you want to cancel this  review"
		);
		if (proceed) {
			fetch(`https://cloud-kitchen-server-sand.vercel.app/review/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remaining = reviews.filter((remain) => remain._id !== id);
						setReviews(remaining);
					}
				});
		}
	};

	return (
		<div className="bg-gradient-to-b from-orange-200">
			<div className="container mx-auto px-20 py-60">
				{reviews.length === 0 ? (
					<p className="text-center text-3xl font-bold text-orange-400">
						No reviews were added
					</p>
				) : (
					reviews.map((review, index) => (
						<ReviewItem
							key={review._id}
							review={review}
							index={index}
							handleDelete={handleDelete}
							reviews={reviews}
							setReviews={setReviews}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default MyReviews;
