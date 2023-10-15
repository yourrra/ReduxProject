export const ADD_CASH = 'ADD_CASH'
export const GET_CASH = 'GET_CASH'

export interface CashState {
  cash: number
}

interface AddCashAction {
  type: typeof ADD_CASH
  payload: number
}

interface GetCashAction {
  type: typeof GET_CASH
  payload: number
}

export type CashActionTypes = AddCashAction | GetCashAction

const defaultState: CashState = {
  cash: 0,
}

export const cashReducer = (
  state: CashState = defaultState,
  action: CashActionTypes,
): CashState => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload }
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}
