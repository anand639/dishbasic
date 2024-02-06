import React from "react";
import PropTypes from "prop-types";

// This component takes a single prop, 'dish', which is an object containing the details of the dish

function DishDetails({ dish }) {
	// Destructuring the 'dish' prop to extract the 'name' and 'description' properties for easier access
	const { name, description } = dish;
	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	);
}

DishDetails.propType = {
	dish: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
	}).isRequired,
};

export default DishDetails;