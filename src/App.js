import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "샤또",
    amount: 12.22,
    date: new Date(2022, 4, 9),
  },
  {
    id: "e2",
    title: "라크라",
    amount: 312.22,
    date: new Date(2023, 11, 6),
  },
  {
    id: "e3",
    title: "앙케",
    amount: 142.22,
    date: new Date(2024, 8, 11),
  },
  {
    id: "e4",
    title: "엘레베",
    amount: 92.22,
    date: new Date(2024, 4, 22),
  },
];

//대체함수문법
const App = () => {
  //함수로 표현
  // function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
