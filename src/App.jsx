import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <>
      <Counter count={count} />
      <IncrementButton onIncrement={increment} />
      <DecrementButton onDecrement={decrement} />
    </>
  );
}

export default App;
