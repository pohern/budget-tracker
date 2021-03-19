import { createContext, useReducer } from 'react'

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default:
            return state
    }
}

const initalState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 140 },
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