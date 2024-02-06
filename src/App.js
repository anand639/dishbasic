import "./App.css";
import React, { useState } from "react";
import MenuList from "./components/MenuList";
import DishDetails from "./components/DishDetails";

function App() {
	// State for holding the currently selected dish
	const [selectedDish, setSelectedDish] = useState(null);

	// Sample data for the dishes
	const dishes = [
		{
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		}, 
    {
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		},
    {
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		},
    {
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		},
    {
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		},
    {
			id: 1,
			name: "Vegetarian Stuffed Shells",
			description:
				"Creamy mushroom and spinach stuffing filled into crispy fried",
		},
		{
			id: 2,
			name: "Chicken Parmesan",
			description: "Breaded and fried chicken topped with parmesan cheese",
		},//...more dishes
	];

	return (
		<div>
			<h1>Restaurant Menu</h1>
			<MenuList dishes={dishes} onDishSelect={setSelectedDish}></MenuList>
			{/* DishDetails is rendered conditionally based on if dish is selected */}
			{selectedDish && <DishDetails dish={selectedDish}></DishDetails>}
		</div>
	);
}

export default App;
