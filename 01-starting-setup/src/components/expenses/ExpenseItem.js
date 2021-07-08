import React, {useState} from 'react';

import "./ExpenseItem.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {

  //tells react to reevaluate the function so we can change the output
  //it is a hook, you can tell by its name, starts with 'use'
  //can only be called in a function, not in nested functions and not without
  //array deconstruction syntax, the first value is the assigned title from the begginging and the second is a function
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
