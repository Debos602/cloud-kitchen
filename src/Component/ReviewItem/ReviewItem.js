import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReviewItem = ({ review, index }) => {
	console.log(review);
	const { user } = useContext(AuthContext);
	console.log(user);
	const { email, img, price, message, ratings, _id, foodName } = review;

	const reverseOrder = index % 2 !== 0; // Check if index is odd

	return (
		<div className="grid grid-cols-2 gap-10 py-5">
			<div
				className={`bg-white w-full  rounded-lg border-2 border-orange-400 flex flex-col items-center justify-center mb-5 py-10 ${
					reverseOrder ? "order-2" : "order-1"
				}`}
			>
				<img src={user?.photoURL} className="h-32 w-32 rounded-full" alt="" />
				<div className="text-2xl font-bold text-orange-400">
					{user.displayName}
				</div>
				<p className="font-bold to-slate-800">{user.email}</p>
			</div>
			<div
				className={`flex flex-col items-center justify-center ${
					reverseOrder ? "order-1" : "order-2"
				}`}
			>
				<div className="text-3xl flex  justify-between w-full items-center font-bold opacity-90 text-orange-400 mb-3">
					{foodName}
					<p className="text-xl font-light text-blue-950">Ratings: {ratings}</p>
				</div>
				<p className="text-xl py-2 opacity-80 border-2 border-orange-300 rounded-lg p-4">
					"{message}"
				</p>
				<div className="flex justify-between w-full pt-4 font-bold text-2xl">
					<Link className="bg-white p-3 rounded-lg hover:bg-black text-orange-400 border-2 border-orange-400">
						<FaUserEdit />
					</Link>
					<Link className="bg-white p-3 rounded-lg hover:bg-black text-orange-400 border-2 border-orange-400">
						<RiDeleteBin5Fill />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
