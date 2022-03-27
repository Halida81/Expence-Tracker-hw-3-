import './ExpenseDate.css'

function ExpenseDate (props){ //дата учун компонента

    const month = props.date.toLocaleString('en-Us', {month:'long'}  ); //props аркылуу келген датанын айын алабыз
    const day = props.date.toLocaleString('en-Us', {day:'2-digit'}); //props аркылуу келген датанын кунун алабыз
    const year = props.date.toLocaleString();                        //props аркылуу келген датанын жылын алабыз

    return (
         <div className='expense-date'>

                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            
        </div>
    )
}

export default ExpenseDate;