import React, { useState } from "react";
import App from "../../App";
import "./ExpenseForm.css";
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  // Empty string is assigned to the enteredTitle using the useState('')
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   Combining all three States into one by making an object of useState

  // we need to make sure that the values that we are not changing does not get lost so we need to make a copy of other two values so we write the spread operator.

  //   const [userInput, setUserInput] = useState({
  //       enteredTitle: '',
  //       enteredAmount: '',
  //       enteredDate: ''
  //   })

  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredTitle: event.target.value,
  //       };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredAmount: event.target.value,
  //       };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredDate: event.target.value,
  //       };
  //     });
  //   };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // combining all the values in an object that are updated that is user entered value in form

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    // now we have to pass this object to the App.js where we have expenses array

    // to pass expenseData Object to app.js first of all we need to pass it to the NewExpense.js

    props.onSaveExpenseData(expenseData);

    // emptying the form inputs after submitting form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
