import React from "react";

const AddService = () => {
	const handleFormData = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const image = form.image.value;
		const ratings = form.ratings.value;
		const price = form.price.value;
		const message = form.message.value;
		console.log({ name, image, ratings, price, message });

		const formData = {
			name: name,
			price: price,
			img: image,
			description: message,
			ratings: 4.8,
		};

		fetch("http://localhost:5000/addservice", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("data added successfully");
				}
				console.log(data);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="bg-gradient-to-b from-orange-200 min-h-screen flex justify-center items-center">
			<div className="w-full md:w-2/4 px-4 py-48">
				<h2 className="text-center text-2xl uppercase font-bold py-5">
					Add Service Form
				</h2>
				<div className="border-2 border-orange-400 rounded-lg">
					<form onSubmit={handleFormData} className="py-5 px-8">
						<div className="grid grid-cols-2 max-lg:grid-cols-2  gap-5">
							<label className="text-xl font-bold my-2 block">
								Food Name
								<input
									name="name"
									type="text"
									placeholder="Food Name"
									className="border-2 rounded-xl border-gray-300 p-4 w-full"
								/>
							</label>
							<label className="text-xl font-bold my-2 block">
								Image URL
								<input
									type="text"
									name="image"
									placeholder="Image url"
									className="border-2 rounded-xl border-gray-300 p-4 w-full"
								/>
							</label>
							<label className="text-xl font-bold my-2 block">
								Ratings
								<input
									type="text"
									name="ratings"
									placeholder="ratings"
									className="border-2 rounded-xl border-gray-300 p-4 w-full"
								/>
							</label>
							<label className="text-xl font-bold my-2 block">
								Price
								<input
									type="text"
									name="price"
									placeholder="Price"
									className="border-2 rounded-xl border-gray-300 p-4 w-full"
								/>
							</label>

							<label className="col-span-2 text-xl font-bold my-2 block">
								Message
								<textarea
									name="message"
									className="text-area border-2 rounded-xl border-gray-300 p-4 w-full"
									placeholder="Description"
								></textarea>
							</label>
						</div>
						<div className="text-center">
							<button className="btn btn-secondary hover:bg-black hover:text-orange-300 px-14 font-semibold bg-orange-400 mt-4 text-xl uppercase">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddService;
