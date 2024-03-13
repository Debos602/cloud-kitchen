import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Shop from "../Shop/Shop";
import Contact from "../Contact/Contact";
import AddService from "../AddService/AddService";
import MyReviews from "../MyReview/MyReviews";
import Services from "../Services/Services";
import Review from "../Review/Review";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/shop",
				element: <Shop></Shop>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/addservice",
				element: <AddService></AddService>,
			},
			{
				path: "/myreview",
				element: <MyReviews></MyReviews>,
			},
			{
				path: "/signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/shop",
				element: <Shop></Shop>,
			},
			{
				path: "/services",

				element: <Services></Services>,
			},
			{
				path: "/services/:id",
				loader: ({ params }) =>
					fetch(
						`https://cloud-kitchen-server-sand.vercel.app/services/${params.id}`
					),
				element: <ServiceDetails></ServiceDetails>,
			},
			{
				path: "/review",
				element: (
					<PrivateRoute>
						<Review></Review>
					</PrivateRoute>
				),
			},
		],
	},
]);
export default router;
