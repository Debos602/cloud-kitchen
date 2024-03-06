import { Link } from "react-router-dom";

const BannerItem = ({ banner }) => {
	const { image, pre, next, id } = banner;
	const backgroundImageStyle = {
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "100%",
		height: "100vh",
	};

	return (
		<div id={`slide${id}`} className="carousel-item relative w-full">
			<div
				className="flex justify-center items-center relative z-10"
				style={backgroundImageStyle}
			>
				<div className="absolute inset-0 bg-black opacity-75 -z-10 mix-blend-multiply"></div>
				<div className="text-center text-white mt-20">
					<h1 className="text-6xl mb-5 font-bold">We serve quality food</h1>
					<p>
						"Savor virtual delights: Cloud kitchen cuisine elevates taste,{" "}
						<br />
						bringing joy to taste buds."
					</p>
					<Link
						to=""
						className="px-10 py-5 font-bold  mt-5 text-black text-xl bg-orange-300 hover:text-orange-400 hover:bg-white duration-500 inline-block rounded-full"
					>
						{" "}
						Make Reservation
					</Link>
				</div>
				<div className="absolute flex justify-center left-5 right-5 bottom-0 transform -translate-y-1/2">
					<a href={`#slide${pre}`} className="btn btn-circle mr-5">
						❮
					</a>
					<a href={`#slide${next}`} className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
