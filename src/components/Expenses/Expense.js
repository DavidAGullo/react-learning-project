import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expense.css';
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";

function Expense(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    //Filter data by year
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    

    return (
        <div>     
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
                {
                    //Filter Year Added
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                }
                
            </Card>
        </div>
    )
}

export default Expense

/*
                <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem> 
                <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
                <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
*/