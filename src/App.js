import "./App.css";
import { Expenses } from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "인공눈물",
      amount: 12.22,
      date: new Date(2023, 4, 9),
    },
    {
      id: "e2",
      title: "에어팟",
      amount: 312.22,
      date: new Date(2021, 2, 28),
    },
  ];

  return (
    <>
      <h1> 테스트 페이지야</h1>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
