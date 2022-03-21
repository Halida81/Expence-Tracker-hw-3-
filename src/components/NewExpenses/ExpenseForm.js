import { useState } from 'react';
import './ExpenseForm.css'

//Version-2 object
const ExpenseForm = (props)=>{


    //Version-SLICE
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

//Version-obj
    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // });

    const titleChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
           
        // });
        
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // });
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // });
        setDate(event.target.value)
    }


    // const inputChangeHandler = (event) =>{
    //   const currentInput = event.target.name;
    //   if(currentInput === 'title'){
    //       setTitle(event.target.value)
    //   }else if(currentInput === 'amount'){
    //       setAmount(event.target.value)
    //   }else if(currentInput ==='date'){
    //       setDate(event.target.value)
    //   }
    // }

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(event);
        let dataNew = {
            title: title,
            amount: amount,
            date: new Date(date),
        };
        // console.log(dataNew);
        props.onSave(dataNew);
        

        
    }
    return <form onSubmit={submitHandler}>
       <div className='new-expense__controls'>
           <div className='new-expense__control'> 
              <label>Title</label>
              <input name='title' type="text" 
              onChange={titleChangeHandler}
            value={title}
              ></input>
           </div>
           <div className='new-expense__control'>
              <label>Amount</label>
              <input name='amount' type="number" min='0.1' step='1' 
              onChange={amountChangeHandler} 
            value={amount}
              ></input>
           </div>
           <div className='new-expense__control'>
              <label>Date</label>
              <input name='date' type="date" min='2022-01-01' 
              onChange={dateChangeHandler}
            value={date}
              ></input>
               </div>

       </div>
       <div className='new-expense__actions'>
           <button type='submit'> Add expense </button>
           </div>
    </form>
}
export default ExpenseForm;