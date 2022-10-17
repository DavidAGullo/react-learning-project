import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setShowForm(false);
    };
    //Show state
    const [showForm, setShowForm] = React.useState(false);
    const showFormHandler = () => {
        setShowForm(true);
    };
    const hideFormHandler = () => {
        setShowForm(false);
    };


    return (
        <div className="new-expense">
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />}
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
        </div>
    );
};

export default NewExpense;