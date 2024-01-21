import ChangeCounter from "../components/ChangeCounter";

//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*Alterando valor contexot */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
