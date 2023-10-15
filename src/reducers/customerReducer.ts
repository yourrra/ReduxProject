export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export interface Customer {
  id: number
  name: string
}

interface AddCustomerAction {
  type: typeof ADD_CUSTOMER
  payload: Customer
}

interface RemoveCustomerAction {
  type: typeof REMOVE_CUSTOMER
  payload: number
}

interface AddManyCustomersAction {
  type: typeof ADD_MANY_CUSTOMERS
  payload: Customer[]
}

export type CustomerActionTypes =
  | AddCustomerAction
  | RemoveCustomerAction
  | AddManyCustomersAction

interface CustomersState {
  customers: Customer[]
}

const defaultState: CustomersState = {
  customers: [],
}

export const customerReducer = (
  state: CustomersState = defaultState,
  action: CustomerActionTypes,
): CustomersState => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload as Customer],
      }
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          customer => customer.id !== (action.payload as number),
        ),
      }
    default:
      return state
  }
}
