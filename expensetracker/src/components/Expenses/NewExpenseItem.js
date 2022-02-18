import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./NewExpenseItem.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenseItem(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filterChangeHandler = (data) => {
    setEnteredFilter(data);
  };

  const newArr = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={newArr}></ExpensesChart>
        <ExpensesList items={newArr}></ExpensesList>
      </Card>
    </div>
  );
}

export default NewExpenseItem;
