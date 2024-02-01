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
  const { color, dispatch } = UseTitleColorContext();

  //6- alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*Alterando valor contexot */}
      <ChangeCounter />
      {/*6- Alterando context complexo */}
      <div className="">
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
