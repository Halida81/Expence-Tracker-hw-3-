
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses (props){

const [filteredYear, setFilteredYear] = useState('2022')

const filterChangeHandler = (selectedYear) =>{
  setFilteredYear(selectedYear)
};

const filteredExpenses = props.items.filter((expense)=>{
  return expense.date.getFullYear().toString() === filteredYear
})


    return(
        <Card className='expenses'>
           <ExpensesFilter selectYear={filteredYear} onChangeFilter={filterChangeHandler}/>
           <ExpensesChart expenses={filteredExpenses}/>
           <ExpensesList expenses={filteredExpenses} filtered={filteredYear} expensesData={props.items}/>
        
        </Card>
    )
}

export default Expenses;