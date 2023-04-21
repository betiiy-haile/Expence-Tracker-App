import React from 'react'

import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css"

function ExpenseList(props) {

    let expenseContent = <p>No Expenses Found.</p>;
    if (props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    } 

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
