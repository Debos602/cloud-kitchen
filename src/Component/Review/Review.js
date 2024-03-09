import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Review.css";
import { Link } from "react-router-dom";

const Review = ({ _id, name, img, price, ratings }) => {
	const { user } = useContext(AuthContext);
	// console.log(user);

	const handlePlaceReview = (event) => {
		event.preventDefault();
		const form = event.target.closest("form"); // Find the closest form element
		const formData = new FormData(form); // Pass the form element to FormData
		const customerName = formData.get("name");
		const email = user?.email || "unregister";
		const message = formData.get("description");

		const review = {
			review_id: _id,
			img,
			price,
			ratings,
			reviewer: customerName,
			email: email,
			message: message,
			foodName: name,
		};
		console.log(review);

		fetch("http://localhost:5000/review", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Review send successfully");
				form.reset();
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="w-3/4 mb-10 mx-auto">
			<div className="col-span-2 rounded-xl p-10 border-2 border-orange-400">
				<h2 className="text-4xl text-center py-2 tracking-wide font-bold">
					Review
				</h2>
				<div className="flex max-h-24 w-full  items-end mb-5">
					<div className="user-img">
						<img
							src={user?.photoURL}
							className="object-cover border-2 border-orange-300 rounded-xl"
							alt=""
						/>
					</div>

					<h2 className="text-3xl font-bold mx-5">{user?.displayName}</h2>
				</div>
				<form onSubmit={handlePlaceReview}>
					<div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
						<label>
							<span className="text-xl font-bold">Your name</span>
							<input
								type="text"
								name="name"
								className="border-2 rounded-xl border-gray-300 p-4 w-full"
								placeholder="Type here"
							/>
						</label>
						<label>
							<span className="text-xl focus:border-none font-bold">
								Your Email
							</span>{" "}
							<input
								type="email"
								name="email"
								defaultValue={user?.email}
								className="border-2 rounded-xl border-gray-300 p-4 w-full "
								placeholder="Type here"
							/>
						</label>

						<label className="col-span-2 max-lg:col-span-1">
							<span className="text-xl font-bold">Your Review</span>
							<textarea
								placeholder="Bio"
								name="description"
								className="w-full rounded-xl  border-2 p-5 h-56"
								required
							></textarea>
						</label>
					</div>

					<div className="text-center">
						<button
							type="submit"
							className="mt-8 px-8 py-4 hover:text-orange-300 hover:bg-black duration-500 bg-orange-300 text-xl font-bold uppercase rounded-xl"
						>
							Submit Your Review
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Review;
