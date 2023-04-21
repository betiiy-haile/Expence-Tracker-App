import React, { useState } from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "E1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "E2",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2022, 6, 20),
  },
  {
    id: "E3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 4, 28),
  },
  {
    id: "E4",
    title: "New Desk(wooden)",
    amount: 450,
    date: new Date(2021, 3, 28),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...DUMMY_EXPENSES]);
    setExpenses(previousState => [expense, ...previousState])
  }
  
  // Alternative JSX syntax
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expences})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
  }
  
  export default App;
