import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [buttonState, setButtonState] = useState(false);
  

  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    // When we submit a new expense, form hides and the button "Add New Expense" appears
    setButtonState(false);
  }; 

  // Triggered every time we click on "Add New Expense"
  const buttonStateHandler = () => {
    setButtonState(true);
  };

  // Triggered every time we click on "Cancel" .ExpenseForm
  const changeButtonStateHandler = () => {
    setButtonState(false);
  };

  // we set a pointer (onSaveExpenseData) to the function savedExpenseDataHandler
  // and we pass this pointer in the ExpenseForm component, and it will execute there

  return (
    <div className="new-expense">
      {/* if button's state is true, show form */}
      { buttonState && <ExpenseForm onSaveExpenseData = {savedExpenseDataHandler} changeState = {changeButtonStateHandler}/>}
      {/* if button's state is false, show button */}
      { !buttonState && <button onClick={buttonStateHandler}>Add new Expense</button>}
          
    </div>
  );
};

export default NewExpense;
