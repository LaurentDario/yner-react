"use strict"

//This file is mocking a web API by hitting hard coded data.
import lodash from 'lodash'
import { users } from './userData'

//This would be performed on the server in a real app. Just stubbing in.
const _generateId = user => {
	return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase()
}

const _clone = item => {
	return JSON.parse(JSON.stringify(item)) //return cloned copy so that the item is passed by value instead of by reference
}

export const UserApi = {
	getAllUsers: () => {
		return _clone(users) 
	},
	getUserById: id => {
		const user = lodash.find(users, {id: id})
		return _clone(user)
	},
	saveUser: user => {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the user to the DB via AJAX call...')
		
		if (user.id) {
			const existingUserIndex = lodash.indexOf(users, lodash.find(users, {id: user.id})) 
			users.splice(existingUserIndex, 1, user)
		} else {
			//Just simulating creation here.
			//The server would generate ids for new users in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			user.id = _generateId(user)
			users.push(user)
		}
		return _clone(user)
	},
	deleteAuthor: id => {
		console.log('Pretend this just deleted the user from the DB via an AJAX call...')
		lodash.remove(users, { id: id})
	}
}
