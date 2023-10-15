import axios from 'axios'
import { Dispatch } from 'redux'
import { addManyCustomerAction } from '../action/customerAction'

interface User {
  id: number
  name: string
}

export const fetchCustomers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<User[]>(
        'https://jsonplaceholder.typicode.com/users',
      )
      dispatch(addManyCustomerAction(response.data))
    } catch (error) {
      console.error('Error fetching customers:', error)
    }
  }
}
