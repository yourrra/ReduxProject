import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
  addCustomerAction,
  removeCustomerAction,
} from '../../action/customerAction'
import { fetchCustomers } from '../../asyncAction/customer'

export const Customer: React.FC = () => {
  const dispatch = useDispatch()
  const customers = useSelector((state: RootState) => state.customer.customers)

  const addCustomer = (name: string) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customerId: number) => {
    dispatch(removeCustomerAction(customerId))
  }

  const handleFetchCustomers = () => {
    dispatch(fetchCustomers())
  }

  return (
    <>
      <div className="Button-Wrapper">
        <button
          onClick={() => addCustomer(prompt('Enter customer name:') || '')}
        >
          Add Customer
        </button>
        <button onClick={handleFetchCustomers}>Get users from BD</button>
      </div>

      {customers.length > 0 ? (
        <div className="Card-Wrapper">
          {customers.map(customer => (
            <div
              key={customer.id}
              onClick={() => removeCustomer(customer.id)}
              className="Card"
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Customers undefined!</div>
      )}
    </>
  )
}
