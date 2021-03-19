import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)
    // const expenses = [
    //     { id: 1, name: 'Shopping', cost: 50},
    //     { id: 2, name: 'Groceries', cost: 150},
    //     { id: 3, name: 'Gas', cost: 50},
    //     { id: 4, name: 'Rent', cost: 520},
    //     { id: 5, name: 'Presents', cost: 150},
    // ]
    return (
      <ul className='list-group'>
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    );
}
 
export default ExpenseList;