import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addCash, getCash } from '../../action/cashAction'

export const Cash: React.FC = () => {
  const dispatch = useDispatch()
  const cash = useSelector((state: RootState) => state.cash.cash)

  const handleAddCash = () => {
    const amount = Number(prompt('Enter cash amount: '))
    if (!isNaN(amount)) [dispatch(addCash(amount))]
  }

  const handleGetCash = () => {
    const amount = Number(prompt('Enter cash amount to get: '))
    if (!isNaN(amount)) [dispatch(getCash(amount))]
  }

  return (
    <>
      <div className="Counter">{cash} $</div>
      <div className="Button-Wrapper">
        <button onClick={handleAddCash}>Add Cash</button>
        <button onClick={handleGetCash}>Get Cash</button>
      </div>
    </>
  )
}
