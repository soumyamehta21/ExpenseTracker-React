import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // enteredExpenseData will be the object that has title, amount and date entered by user but we also want to add another property that is id so we can do this by using spread operator

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);

    props.onAddExpense(expenseData);

    // to close the form once it is submitted
    setIsEditing(false);
  };

  const clickHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* //     ExpenseForm ma as a prop pass kariye che aapde ek function jene aapde ExpenseForm ma call kari shakisu ane aa saveExpenseDataHandler ek parameter mangse je aapdo object hase user ae enter karelo*/}

      {/* if isEditing is false then display button */}
      {!isEditing && (
        <button type="submit" onClick={clickHandler}>
          Add New Expense
        </button>
      )}

      {/* if isEditing is true display form */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
