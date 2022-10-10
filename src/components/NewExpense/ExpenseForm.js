import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(''); //this is a hook, it allows us to use state in functional components
    const [enteredAmount, setEnteredAmount] = useState(''); //this is a hook, it allows us to use state in functional components
    const [enteredDate, setEnteredDate] = useState(''); //this is a hook, it allows us to use state in functional components
    // onChange is an event listener that listens for changes in the input field
    // onChange is a built in event listener
    // onChange is a function that is called when the input field is changed

    // onChange is different from onClick because onClick is called when the button is clicked
    const titleChangeHandler = (event) => {
        console.log(enteredTitle)
        setEnteredTitle(event.target.value);
        console.log("New: " + enteredTitle)

        //This just shows us the value of the input field
        /*console.log("Title Changed!");
        console.log(event.target.value); //event.target.value is the value of the input field */
    };
    // These are seperate States individually
    const amountChangeHandler = (event) => {
        console.log(enteredAmount)
        setEnteredAmount(event.target.value);
    };
    //This just shows us the value of the input field
    const dateChangeHandler = (event) => {
        console.log(enteredDate)
        setEnteredDate(event.target.value);
    };


    return (
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>
    );
}
export default ExpenseForm;