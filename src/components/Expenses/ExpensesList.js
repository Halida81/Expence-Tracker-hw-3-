import './ExpensesList.css';
import ExpensesItem from './ExpenseItem'

const ExpensesList = (props) =>{ //компонент выбрать этилген жылга карап itemsterdi чыгарып берет 
  // props аркылуу бизге жылга карата кошулган чыгаша жана анын жылы келет 
    let expensesContent =  <p>no Expenses found </p> //эгер тандалган жылга карата чыгаша жок болсо ушул жазуу чыгып калат

if(props.expenses.length > 0){ // expenses-бул келген items(массив келет). Эгер келген массивтин саны 0дон жогору болсо
    expensesContent = props.expenses.map((el)=>{//аны expensesContent-ке мап кылып чыгарабыз
        return (
            <ExpensesItem key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
            />
        )
    })
} 
 if(props.filtered === 'all'){ //filtered-ке тандалган жыл тушот эгер select all dyn value='all' тандалса
console.log(props.expensesData);
      expensesContent =  props.expensesData.map((el)=>{// эмнеге expensesData-нын ичинде баардык items бар all  тандалганда алардын баарын чыгарыш кк 
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