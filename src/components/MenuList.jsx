import React from "react";
import PropType from "prop-types";

// Define a functional component named MenuList
function MenuList({ dishes, onDishSelect }) {
	return (
		<ul>
			{/* Use the map function to iterate over the dishes array. For each dish in the array,
			    create a list item (<li>) element that displays the dish's name. */}
			{dishes.map((dish) => (
				// The key prop is a unique identifier for React to manage list re-renders efficiently
				<li
					key={dish.id}
					// Attach an onClick event handler that calls onDishSelect with the current dish as an argument
					// This is used to notify the parent component which dish was selected
					onClick={() => onDishSelect(dish)}
				>
                    
					{/* Display the name of the dish */}
					{dish.name}
				</li>
			))}
		</ul>
	);
}

// Define the propType for the MenuList component to enforce type checking for props

MenuList.prototype = {
	dishes: PropType.arrayOf(
		PropType.shape({
			//Each object in this array must follow this shape or rules
			id: PropType.number.isRequired, // Each dish must have a number type id and it is required
			name: PropType.string.isRequired, //  Each dish must have a string type name and it is required
			description: PropType.string,
		})
	).isRequired, //to ensure all the prop must be required
	onDishSelect: PropType.func.isRequired, //onDishSelect prop is a function and is required
};

export default MenuList;
