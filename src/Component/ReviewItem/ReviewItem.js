import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReviewItem = ({ reviews, setReviews, review, index, handleDelete }) => {
	const { user } = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);
	const [editMessage, setEditMessage] = useState(review?.message);
	console.log(review);
	const { message, img, ratings, _id, foodName } = review;

	const reverseOrder = index % 2 !== 0; // Check if index is odd

	const handleModal = (event) => {
		event.preventDefault();
		setShowModal(!showModal);
	};

	const handleEditSubmit = (id) => {
		fetch(`https://cloud-kitchen-server-sand.vercel.app/myreview/${id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ message: editMessage }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert("Review update successfully");
					const remaining = reviews.filter((remain) => remain._id !== id);
					const changing = reviews.find((remain) => remain._id === id);
					console.log(changing);
					changing.message = editMessage;

					const finalReview = [changing, ...remaining];
					setReviews(finalReview);
				}

				setShowModal(false);
			});
	};

	return (
		<div className="w-3/4 mx-auto">
			<div className="grid grid-cols-2 max-lg:grid-cols-1  gap-10 py-5">
				<div
					className={`bg-white w-full  rounded-lg border-2 border-orange-400 flex flex-col items-center justify-center mb-5 py-10 ${
						reverseOrder
							? "order-2 max-lg:order-none"
							: "order-1 max-lg:order-none"
					}`}
				>
					<img src={img} className="h-32 w-32 rounded-full" alt="" />
					<div className="text-2xl font-bold text-orange-400">
						{user.displayName}
					</div>
					<p className="font-bold to-slate-800">{user.email}</p>
				</div>
				<div
					className={`flex flex-col items-center justify-center ${
						reverseOrder
							? "order-1 max-lg:order-none"
							: "order-2 max-lg:order-none"
					}`}
				>
					<div className="text-3xl flex  justify-between w-full items-center font-bold opacity-90 text-orange-400 mb-3">
						{foodName}
						<p className="text-xl font-light text-blue-950">
							Ratings: {ratings}
						</p>
					</div>
					<p className="text-xl py-2  min-h-36 w-full font-semibold opacity-70 border-2 border-orange-300 rounded-lg p-4">
						"{message}"
					</p>
					<div className="flex justify-between w-full pt-4 font-bold text-2xl">
						<Link
							onClick={handleModal}
							className="bg-white p-3 rounded-lg hover:bg-black text-orange-400 border-2 border-orange-400"
						>
							<FaUserEdit />
						</Link>
						{showModal && (
							<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
								<div className="bg-white p-4 rounded-lg w-2/5">
									<p className="text-xl font-semibold mb-2">Review Edit</p>
									<textarea
										value={editMessage}
										onChange={(e) => setEditMessage(e.target.value)}
										className="w-full h-40 px-3 py-2 mb-4 border border-gray-300 rounded-lg resize-none"
									></textarea>
									<div className="flex justify-end">
										<button
											onClick={() => handleEditSubmit(_id)}
											className="bg-orange-400 text-white px-4 py-2 rounded-lg mr-2"
										>
											Save
										</button>
										<button
											onClick={handleModal}
											className="bg-gray-400 text-white px-4 py-2 rounded-lg"
										>
											Cancel
										</button>
									</div>
								</div>
							</div>
						)}
						<Link
							onClick={() => handleDelete(_id)}
							className="bg-white p-3 rounded-lg hover:bg-black text-orange-400 border-2 border-orange-400"
						>
							<RiDeleteBin5Fill />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
