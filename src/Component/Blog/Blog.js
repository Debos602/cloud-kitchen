import React from "react";
import useNav from "../../Hooks/useNav";

const Blog = () => {
	useNav("Blog");
	return (
		<div className="min-h-screen bg-gradient-to-t from-orange-200 flex justify-center items-center">
			<div className=" w-full max-lg:w-full md:w-3/4 px-20 pt-56 pb-16 font-bold grid grid-cols-1 md:grid-cols-2 gap-5">
				<div className="border-2 border-orange-300 p-10 rounded-xl">
					<p className="text-xl pb-2"> 1. Difference between SQL and NoSQL?</p>
					<p className="font-normal">
						Answer: SQL (Structured Query Language) databases use a relational
						model with predefined schemas, enforcing data integrity and
						supporting complex queries, making them ideal for structured data
						applications like financial systems. NoSQL (Not Only SQL) databases
						offer flexible schemas, horizontal scalability, and are suitable for
						applications with evolving data needs such as social media
						platforms. Examples include MySQL for SQL databases and MongoDB for
						NoSQL databases.{" "}
					</p>
				</div>
				<div className="border-2 border-orange-300 p-10 rounded-xl">
					<p className="text-xl  pb-2"> 2. Difference between SQL and NoSQL?</p>
					<p className="font-normal">
						Answer: JWT (JSON Web Token) is a compact, self-contained method for
						securely transmitting information between parties as a JSON object.
						It consists of three parts: a header, a payload, and a signature,
						each encoded as Base64. The token is signed with a secret key,
						ensuring its integrity. Upon receiving a JWT, the recipient can
						verify its authenticity using the shared secret, enabling secure
						communication between systems without the need for sessions.
					</p>
				</div>
				<div className="border-2 border-orange-300 p-10 rounded-xl">
					<p className="text-xl  pb-2">
						{" "}
						3. What is the difference between javascript and NodeJS? ?
					</p>
					<p className="font-normal">
						Answer: JavaScript is a programming language commonly used for
						client-side web development, running in web browsers to create
						dynamic and interactive content. Node.js, on the other hand, is a
						runtime environment that allows JavaScript to be run on the
						server-side. While JavaScript in the browser interacts with the
						Document Object Model (DOM) and handles events, Node.js enables
						server-side scripting, file system operations, networking, and the
						creation of web servers and APIs.{" "}
					</p>
				</div>
				<div className="border-2 border-orange-300 p-10 rounded-xl">
					<p className="text-xl  pb-2">
						{" "}
						4. How does NodeJS handle multiple requests at the same time? ?
					</p>
					<p className="font-normal">
						Answer: Node.js uses a single-threaded, event-driven architecture to
						handle multiple requests concurrently. It employs an event loop,
						which continuously checks for events (such as incoming requests or
						I/O operations) and executes corresponding callback functions
						asynchronously. When a request is received, Node.js delegates the
						task to a worker thread or a thread pool for CPU-intensive
						operations, while the event loop remains free to handle other
						requests. This non-blocking I/O model enables Node.js to efficiently
						manage multiple concurrent requests without getting blocked,
						resulting in high performance and scalability.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
