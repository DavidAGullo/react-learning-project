//import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";

function App() {
  
const expenses = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
];
  return (
    <div>
      <h1>Let's get started! Welcome!</h1>
      <p> This is a paragraph, wow!</p>
      <Expense expenses={expenses} />
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

*/
export default App;
