import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Home = () => {
	const phones = useLoaderData();
	return (
		<div>
			<h3>Show me the all phones you have!!!!!!!</h3>
			<h5>I got : {phones.length}</h5>
			{phones.map((phone) => (
				<li>
					<Link to={`/phones/${phone.id}`}>{phone.name}</Link>
				</li>
			))}
		</div>
	);
};

export default Home;
