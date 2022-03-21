import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import {useState} from 'react'


function ExpenseItem (props){
  const [title, setTitle] = useState(props.title)
//   const [amount, setAmount] = useState('')

  
    // let expenseTitle = props.title;
    const expensePrice = props.amount
    
    
    return (
    

        <div className='expense-item'>
            
            <ExpenseDate  date = {props.date}/>
       
            <h2  className='expense-item__description'>{title}</h2>
            <div  className='expense-item__price'>${expensePrice}</div>
            
        </div>
        
    )
}

export default ExpenseItem;