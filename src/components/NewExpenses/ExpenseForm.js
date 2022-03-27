import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props)=>{

//Version-obj
   const [title, setTitle] = useState('')
   const [amount, setAmount] = useState('')
   const [date, setDate] = useState('')


    


    const inputChangeHandler = (event) =>{
      const currentInput = event.target.name;
      if(currentInput === 'title'){
          setTitle(event.target.value)
      }else if(currentInput === 'amount'){
          setAmount(event.target.value)
      }else if(currentInput ==='date'){
          setDate(event.target.value)
      }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        // console.log(userInput);
        let dataNew = {
            title,
            amount,
            date: new Date(date),
        };

        // console.log(title);
        props.onSave(dataNew);

        

        
    }
    return <form onSubmit={submitHandler}>
       <div className='new-expense__controls'>
           <div className='new-expense__control'> 
              <label>Title</label>
              <input name='title' type="text" 
              onChange={inputChangeHandler}
            value={title}
              ></input>
           </div>
           <div className='new-expense__control'>
              <label>Amount</label>
              <input name='amount' type="number" min='0.1' step='1' 
              onChange={inputChangeHandler} 
            // value={amount}
              ></input>
           </div>
           <div className='new-expense__control'>
              <label>Date</label>
              <input name='date' type="date" min='2022-01-01' 
              onChange={inputChangeHandler}
            // value={date}
              ></input>
               </div>

       </div>
       <div className='new-expense__actions'>
           <button type='submit'> Add expense </button>
           </div>
    </form>
}
export default ExpenseForm;