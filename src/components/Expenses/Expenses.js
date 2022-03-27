import ExpenseItem from './ExpenseItem';
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
// console.log(filteredExpenses);
// console.log(filteredYear);
// console.log(filteredExpenses.value);

// let expensesContent = < p style={{textAlign:'center', color:'red'}}>no expenses found </p>

// if (filteredExpenses.length > 0 ){
//   expensesContent = filteredExpenses.map((el) => {
//     return (
//       <ExpenseItem 
//       key={el.id} 
//       title={el.title} 
//       amount={el.amount} 
//       date={el.date}
//       />
//     );
//   })
// }
// if(filteredYear === 'all'){
//   expensesContent = props.items.map((el)=>{
//    return  <ExpenseItem 
//    key={el.id} 
//    title={el.title} 
//    amount={el.amount} 
//    date={el.date}/>
//   })
// }

    return(
        <Card className='expenses'>
           <ExpensesFilter selectYear={filteredYear} onChangeFilter={filterChangeHandler}/>
           <ExpensesChart expenses={filteredExpenses}/>
           <ExpensesList expenses={filteredExpenses} filtered={filteredYear} expensesData={props.items}/>
           {/* <ExpensesList selectedYear={filteredYear}/> */}
           {/* {expensesContent} */}
           {/* {console.log(expensesContent)} */}
          {/* {version -1 } */}
          {/* {filteredExpenses.length === 0 ? (
             <div className='expense-not'><>Not found expenses</></div>
             ) : (
               filteredExpenses.map((el) => {
            return(
              <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}
              />
            );
          })
          ) } */}
        
         {/* {Version - 2 } */}
        {/* {filteredExpenses.length === 0 && props.items.length === 0 && (<p style={{textAlign:'center', color:'black'}}>Not found expenses</p>)}
         {filteredExpenses.length > 0 && filteredExpenses.map((element) =>{
           return (
             <ExpenseItem
             key={element.id}
             title={element.title}
             amount={element.amount}
             date={element.date}
             />
           );
         })}
         {filteredYear === 'all' && props.items.map((element) =>{
           return (
             <ExpenseItem
             key={element.id}
             title={element.title}
             amount={element.amount}
             date={element.date}
             />
           );
         })} */}
        </Card>
    )
}

export default Expenses;