import Chart from '../Chart/Chart'

const ExpensesChart = (props)=>{ //тандалган items тушот
 const chartDataPoints = [
     {label:'Jan', value:0},
     {label:'Feb', value:0},
     {label:'Mar', value:0},
     {label:'Apr', value:0},
     {label:'May', value:0},
     {label:'Jun', value:0},
     {label:'Jul', value:0},
     {label:'Aug', value:0},
     {label:'Sep', value:0},
     {label:'Oct', value:0},
     {label:'Nov', value:0},
     {label:'Dec', value:0},
];
    for (const expense of props.expenses) //келген itemsтарды аралап 
     {
        const expenseMonth = expense.date.getMonth() //алардын айын алат ал айды expenseMonthга сактайт
        chartDataPoints[expenseMonth].value += expense.amount;// chartDataPointsка-тандалган жылды жана анын value сун беребиз + келген 
        //itemsтин amountтун тандалган айдын valueсуна кошобуз
    }
    return <Chart dataPoints={chartDataPoints}/> 
    
    
}

export default ExpensesChart;