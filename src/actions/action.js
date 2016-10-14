export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodoItem = (todo_item) => ({
	type: 'ADD_TODO',
	data: todo_item
})

export const removeTodoItem = (todo_item) => ({
	type: 'REMOVE_TODO',
	data: todo_item
})
