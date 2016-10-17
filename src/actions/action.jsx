export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL = "REMOVE_ALL";

export const addOrRemove = (addRemove, item, incrementDecrement) => ({
	type: addRemove,
	item: item,
	incrementDecrement
});