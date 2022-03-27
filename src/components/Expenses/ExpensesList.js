import './ExpensesList.css';
import ExpensesItem from './ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const ExpensesList = (props) =>{
    
    let expensesContent =  <p>no Expenses found </p>

if(props.expenses.length > 0){
    expensesContent = props.expenses.map((el)=>{
        return (
            <ExpensesItem key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
            />
        )
    })
} 
 if(props.filtered === 'all'){
console.log(props.expensesData);
      expensesContent =  props.expensesData.map((el)=>{
       return  <ExpensesItem 
       key={el.id} 
       title={el.title} 
       amount={el.amount} 
       date={el.date}/> 
      })
    }


    

    return (
        <ul className='expenses-list'>
            {expensesContent}
        </ul>
    )


    
}

export default ExpensesList;