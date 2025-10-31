import { useState } from "react";
// const Counter = () => {
//   return <div>Counter Component</div>;
// };

// const Counter1 = () => {
//   return <div>Counter1 Component</div>;
// };

// export { Counter, Counter1 };

const Counter = () => {
  const [count, setCount] = useState(0);

  // const handleAdd = () => {
  //   setCount(count + 1);
  // };
  // const handleSub = () => {
  //   setCount(count - 1);
  // };

  const handleCounter = (type) => {
    // if (type === "add") {
    //   setCount(count + 1);
    // } else {
    //   setCount(count - 1);
    // }
    setCount(type === "add" ? count + 1 : count - 1);
  };
  return (
    <div>
      Counter From Counter.jsx
      <h1>{count}</h1>
      <div>
        <button style={{ marginRight: 5 }} onClick={() => handleCounter("add")}>
          Add
        </button>
        <button onClick={() => handleCounter("sub")}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
