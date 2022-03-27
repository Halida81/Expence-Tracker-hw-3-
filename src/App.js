
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpense';
import Card from './components/UI/Card'

  const INIT_STATE = [ // App.js компонента которое собирает все компоненты. INIT_STATE - как бы данные из бекенда они не меняются
  {
    id: 1,
    title: 'Apple',
    amount: 3,
    date: new Date( 2022, 1, '08'),
  },
  {
    id: 1,
    title: 'Banana',
    amount: 1,
    date: new Date( 2023, 4, '02'),
  },
  
]
function App() {                                             //App.js компонента которое собирает все компоненты

  const [expenses, setExpenses] = useState(INIT_STATE); // INIT_STATEтин ичиндеги данныйга жаны данный кошуу учун ага состояние кошобуз
  // анын баштапкы абалы бул - INIT_STATE. setExpensesке озгоргон абал сакталат ал озгоргон данныйды  expenses ке откоруп берет

  const newExpenseAddHandler = (expense) =>{ //бул жерде подЪем состояние болуп жатат. newExpenseAddHandler - жаны экпенс кошуу учун обработчик
    console.log(expense)// add болгон жаны данный expense ге тушот
      setExpenses(PrevState =>{
        console.log(PrevState)// INIT_STATE-ичиндеги данный PrevState-ке тушот т.е. эски данныйлар
      return[expense, ...PrevState]; //expense-жаны add болгон данный мн PrevState-эски данныйларды newExpenseAddHandler-чогултуп берет
     
    })
    
  }
  
  return (
    <div className="App">
      <Card>   
      <NewExpenses onSaveAdd={newExpenseAddHandler} /> 
     
     <Expenses items = {expenses}/>
      </Card>
      
    </div>
  );
}

export default App;