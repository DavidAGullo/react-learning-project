//Functions can only have one return statement with one root element
import './ExpenseItem.css'; //importing css file

//We don't need these anymore because we are using the ExpenseItem props
const expenseDate = new Date(2021, 2, 28); //month is 0 based
const expenseTitle = 'Car Insurance';
const expenseAmount = precise(250.64);

function ExpenseItem(props) { //props is an object, props are the most important thing in React
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${precise(props.amount)}</div>
      </div>
    </div>
  );
}

function precise(x) {
  return x.toFixed(2); //returns a number with 2 decimal places (e.g. 250.64)
}
export default ExpenseItem;
