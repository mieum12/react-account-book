import "./ExpensesFilter.css";

export const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //Expenses.js로 값 보내기
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연간 그래프 확인</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
