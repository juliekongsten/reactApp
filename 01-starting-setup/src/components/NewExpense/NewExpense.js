import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


//i want a form for the input so you can add an expense to the tracker
const NewExpense = () => {
    return <div className="new-expense">
        <ExpenseForm />
    </div>
};

export default NewExpense;
