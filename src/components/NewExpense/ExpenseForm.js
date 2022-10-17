import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    /* We No Longer Need This
    const [enteredTitle, setEnteredTitle] = useState(''); //this is a hook, it allows us to use state in functional components
    const [enteredAmount, setEnteredAmount] = useState(''); //this is a hook, it allows us to use state in functional components
    const [enteredDate, setEnteredDate] = useState(''); //this is a hook, it allows us to use state in functional components

    Example of using multiple states
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    */



    //Single State
    // eslint-disable-next-line no-unused-vars
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }); //this is a hook, it allows us to use state in functional components

    // onChange is an event listener that listens for changes in the input field
    // onChange is a built in event listener
    // onChange is a function that is called when the input field is changed

    //supress unused variable warning
    


    // onChange is different from onClick because onClick is called when the button is clicked
    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            //obj copy
            return {...prevState, enteredTitle: event.target.value};
            });
        //This just shows us the value of the input field
        /*console.log("Title Changed!");
        console.log(event.target.value); //event.target.value is the value of the input field */
    };
    // These are seperate States individually
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
            }
        );
    };
    //This just shows us the value of the input field
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
            }
        );
    };

    //Not good version of the above code
    /*
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    */

    const submitHandler = (event) => {
        event.preventDefault(); //prevents the page from reloading when the form is submitted
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData); //this is a function that is called when the form is submitted (Child to Parent Component Communication)
        //console.log(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
            });
        //setUserInput.enteredAmount('');
        //setUserInput.enteredDate('');
    };
    const cancelHandler = (event) => {
        event.preventDefault(); //prevents the page from reloading when the form is submitted
        props.onCancel(); //this is a function that is called when the form is submitted (Child to Parent Component Communication)
    };

    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
        </form>
    );
}
export default ExpenseForm;