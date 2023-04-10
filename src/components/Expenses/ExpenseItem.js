// import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // function clickHandler() {
  //   setTitle("UPDATED!");
  //   console.log(title);
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>change title</button> */}
      </Card>
    </li>
  );
}
