import React from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expences = [
    {
      id: "E1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28)
    },
    {
      id: "E2",
      title: "New Tv",
      amount: 799.49,
      date: new Date(2021, 6, 20)
    },
    {
      id: "E3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 4, 28)
    },
    {
      id: "E4",
      title: "New Desk(wooden)",
      amount: 450,
      date: new Date(2021, 3, 28)
    }
  ]

  const addExpenseHandler = expense => {
    console.log("In app.js")
    console.log(expense)
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
      <Expenses items={expences} />
    </div>
  );
  }
  
  export default App;
