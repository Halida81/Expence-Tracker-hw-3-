import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpenses = (props) =>{
    const saveExpenseHandler = (data) =>{
    let dataNew = {
        ...data,
        id: Math.random().toString()
    }
    props.onSaveAdd(dataNew)
    
    }
    return <div className='new-expense'>
        <ExpenseForm onSave={saveExpenseHandler}/>
    </div>
};

export default NewExpenses;