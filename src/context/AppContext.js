import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
              ...state,
              expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };
        case 'SET_BUDGET':
            return {
              ...state,
              budget: action.payload,
            };
        default:
            return state
    }
}

const initalState = {
  budget: 0,
  expenses: [
  ],
};

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initalState)
    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>)
}