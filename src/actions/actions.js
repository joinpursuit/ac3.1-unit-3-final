export function countItems(amount){
	return({
		type:'COUNT_ITEMS',
		amount
	})
}

export function addItems(item){
	return({
		type:'ADD_ITEMS',
		item
	})
}

export function itemsList(data){
	return({
		type:'ITEMS_LIST',
		data
	})
}

