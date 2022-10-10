//Functions can only have one return statement with one root element
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; //importing css file

//We don't need these anymore because we are using the ExpenseItem props
/*
const expenseDate = new Date(2021, 2, 28); //month is 0 based
const expenseTitle = 'Car Insurance';
const expenseAmount = precise(250.64);
*/
const ExpenseItem = (props) => { //props is an object, props are the most important thing in React
  const [title, setTitle] = useState(props.title); //this is a hook, it allows us to use state in functional components
  //useState returns an array with 2 elements, the first element is the current state, the second element is a function that allows us to update the state
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  } //this is a function that is called when the button is clicked

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} /> 
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${precise(props.amount)}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
//ExpenseData in ExpenseItem.js has self closing tag because it is a component without any content
//Props are used here to cast data from the parent component to the child component
//props from App.js are passed to ExpenseItem.js which then passes them to ExpenseDate.js

function precise(x) {
  return x.toFixed(2); //returns a number with 2 decimal places (e.g. 250.64)
}
export default ExpenseItem;