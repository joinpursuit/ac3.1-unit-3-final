import React from 'react';
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM"

export const addShirt = () => ({
	type: ADD_ITEM,
	data: <li>Shirt</li>
})

export const addShoes = () => ({
	type: ADD_ITEM,
	data: <li>Shoes</li>
})

export const addHat = () => ({
	type: ADD_ITEM,
	data: <li>Hat</li>
})

export const addSunglasses = () => ({
	type: ADD_ITEM,
	data: <li>Sunglasses</li>
})

export const removeShirt = (data, amount) => ({
	type: REMOVE_ITEM,
	data: <del>Shirt</del>,
	amount: (amount) ? amount : 1
})

export const removeShoes = (data, amount) => ({
	type: REMOVE_ITEM,
	data: data,
	amount: (amount) ? amount : 1
})

export const removeHat = (data, amount) => ({
	type: REMOVE_ITEM,
	data: data,
	amount: (amount) ? amount : 1
})

export const removeSunglasses = (data, amount) => ({
	type: REMOVE_ITEM,
	data: data,
	amount: (amount) ? amount : 1
})