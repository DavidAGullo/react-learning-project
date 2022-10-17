//import ExpenseItem from "./components/ExpenseItem";
import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 284.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  

  //useState(DUMMY_EXPENSES);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
}
// <ExpenseItem></ExpenseItem> - This is a custom component
/* 
In Theory,
      <Expense title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <Expense title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <Expense title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <Expense title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
is a solution but doesn't scale well.

What react looks like without JSX:
return React.createElement(
  'div', {},      (the {} is the props object)
  React.createElement(
    'h2', {}, 'Let's get started!'), 
  React.createElement(
    'p', {}, 'This is also visible!'));
  React.createElement(Expenses, {items: expenses});
*/
export default App;
