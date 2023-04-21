import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020")
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))} */}
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />

      {/* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      /> */}
    </Card>
  );
}

export default Expenses;
