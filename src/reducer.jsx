import React from 'react'

const ADD_ITEM = 'ADD_ITEM'
const _defaultState = []

const reducer (oldState = _defaultState ,action) => (
		switch (action.type) {
			case ADD_ITEM:
				return (
					[...oldState,action.item])
			default: 
				return oldState

		}
		) 

export default reducer