import ExpenseItem from "./components/Expenses/ExpenseItem";
import React, {useState} from "react";
import NewExpenseItem from "./components/Expenses/NewExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, SetExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {  
    SetExpenses((prevState) => {
      return [...prevState, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <NewExpenseItem items={expenses}></NewExpenseItem>
    </div>
  );
}

export default App;