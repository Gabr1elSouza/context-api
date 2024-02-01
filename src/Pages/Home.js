import ChangeCounter from "../components/ChangeCounter";

//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

//5- context advanced
import { UseTitleColorContext } from "../hooks/UseTitleColorContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  //5- context advanced
  const { color } = UseTitleColorContext();
  console.log(color);
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*Alterando valor contexot */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
