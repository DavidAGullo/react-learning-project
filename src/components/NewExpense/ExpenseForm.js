import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // onChange is an event listener that listens for changes in the input field
    // onChange is a built in event listener
    // onChange is a function that is called when the input field is changed

    // onChange is different from onClick because onClick is called when the button is clicked
    const titleChangeHandler = (event) => {
        console.log("Title Changed!");
        console.log(event.target.value); //event.target.value is the value of the input field
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
            <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>
    );
}
export default ExpenseForm;