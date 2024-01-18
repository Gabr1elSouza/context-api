import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";

import { CounterContext } from "../Context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);
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
