import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  // Props are the object inside the const expenses in App.js
  const [selectedFilteredYear, setSelectedFilteredYear] = useState("2019");

  const addSavedYear = (selectedYear) => {
    setSelectedFilteredYear(selectedYear);
  };

  // Filters the year and displays each item by the year (filtered.map() )
  const filtered = props.items.filter(
    (item) => item.date.getFullYear().toString() === selectedFilteredYear
  );

  

  // key: asign id, making sure the items wont change order (check console)
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedFilteredYear}
        onSelectedYear={addSavedYear}
      />

      <ExpensesChart expenses={filtered}/>

      <ExpensesList items={filtered}/>
  
    </Card>
  );
};

export default Expenses;
