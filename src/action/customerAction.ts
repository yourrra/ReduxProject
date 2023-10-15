import {
  ADD_CUSTOMER,
  ADD_MANY_CUSTOMERS,
  Customer,
  REMOVE_CUSTOMER,
} from '../reducers/customerReducer'

export const addCustomerAction = (payload: Customer) => ({
  type: ADD_CUSTOMER,
  payload,
})

export const addManyCustomerAction = (payload: Customer[]) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
})

export const removeCustomerAction = (payload: number) => ({
  type: REMOVE_CUSTOMER,
  payload,
})
