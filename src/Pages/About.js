//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { UseTitleColorContext } from "../hooks/UseTitleColorContext";
import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color } = UseTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
