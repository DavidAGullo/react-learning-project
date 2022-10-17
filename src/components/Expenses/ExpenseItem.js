//Functions can only have one return statement with one root element
import React from 'react';
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
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} /> 
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${(props.amount)}</div>
        </div>
      </Card>
    </li>
  );
}
//ExpenseData in ExpenseItem.js has self closing tag because it is a component without any content
//Props are used here to cast data from the parent component to the child component
//props from App.js are passed to ExpenseItem.js which then passes them to ExpenseDate.js


export default ExpenseItem;
