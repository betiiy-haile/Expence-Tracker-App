import ExpenseItem from "./components/ExpenseItem";

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

    return (
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem
          title={expences[0].title}
          date={expences[0].date}
          amount={expences[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expences[1].title}
          date={expences[1].date}
          amount={expences[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expences[2].title}
          date={expences[2].date}
          amount={expences[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={expences[3].title}
          date={expences[3].date}
          amount={expences[3].amount}
        ></ExpenseItem>
      </div>
    );
  }
  
  export default App;
