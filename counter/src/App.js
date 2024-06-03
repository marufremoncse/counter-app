import { useState } from 'react';
import './App.css';
import CounterButton from "./Component/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = (by)=>{
    setCount(count + by);
  }

  const decrementCounter = (by)=>{
    setCount(count - by);
  }
  return (
    <div className="App">
      <p>{count}</p>
      <CounterButton val={1} incrementCounter={incrementCounter} decrementCounter={decrementCounter}></CounterButton>
      <CounterButton val={2} incrementCounter={incrementCounter} decrementCounter={decrementCounter}></CounterButton>
      <CounterButton val={5} incrementCounter={incrementCounter} decrementCounter={decrementCounter}></CounterButton>
    </div>
  );
}

export default App;
