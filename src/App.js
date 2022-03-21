
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpense';

  const INIT_STATE = [
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
    date: new Date( 2022, 4, '02'),
  },
  {
    id: 1,
    title: 'Strawberry',
    amount: 1.5,
    date: new Date( 2022, 6, 24),
  },
  {
    id: 1,
    title: 'Cherries',
    amount: 4.5,
    date: new Date( 2022, 11, 16),
  },
]
function App() {

  const [expenses, setExpenses] = useState(INIT_STATE);

  const newExpenseAddHandler = (expense) =>{
    console.log(expense);
    console.log('in');

    setExpenses(PrevExpense =>{
      return[expense, ...PrevExpense];
    })
  }
  return (
    <div className="App">
      <NewExpenses onSaveAdd={newExpenseAddHandler} />
      <Expenses items = {expenses}/>
      
    </div>
  );
}

export default App;