import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses (props){



    return(
        <Card className='expenses'>
          {props.items.map((el) => {
            return(
              <ExpenseItem key={Math.random()} title={el.title} amount={el.amount} date={el.date}/>
            )
          })}
        
    
        </Card>
    )
}

export default Expenses;