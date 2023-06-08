import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "샤또",
    amount: 36000,
    date: new Date(2022, 1, 9),
  },
  {
    id: "e2",
    title: "라크라사드 블랙",
    amount: 56000,
    date: new Date(2023, 2, 6),
  },
  {
    id: "e3",
    title: "앙케",
    amount: 40000,
    date: new Date(2024, 3, 11),
  },
  {
    id: "e4",
    title: "엘레베",
    amount: 33000,
    date: new Date(2024, 4, 22),
  },
  {
    id: "e5",
    title: "샤인머스켓",
    amount: 25000,
    date: new Date(2024, 5, 22),
  },
  {
    id: "e6",
    title: "다이어리",
    amount: 13000,
    date: new Date(2024, 6, 22),
  },
  {
    id: "e7",
    title: "집게핀",
    amount: 10000,
    date: new Date(2024, 7, 22),
  },
  {
    id: "e8",
    title: "미피 잠옷",
    amount: 36000,
    date: new Date(2024, 8, 22),
  },
  {
    id: "e9",
    title: "아이스 아메리카노",
    amount: 4400,
    date: new Date(2024, 9, 22),
  },
  {
    id: "e10",
    title: "텀블러",
    amount: 27000,
    date: new Date(2024, 10, 22),
  },
  {
    id: "e11",
    title: "블루투스 마우스",
    amount: 26500,
    date: new Date(2024, 11, 22),
  },
  {
    id: "e12",
    title: "수분크림",
    amount: 21000,
    date: new Date(2024, 12, 22),
  },
  {
    id: "e13",
    title: "체호프 단편선",
    amount: 7000,
    date: new Date(2024, 1, 22),
  },
  {
    id: "e14",
    title: "곰돌이 인형",
    amount: 20000,
    date: new Date(2024, 2, 22),
  },
  {
    id: "e15",
    title: "애플워치 스트랩",
    amount: 40000,
    date: new Date(2024, 3, 22),
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
