//import { useContext } from "react";
//import { CounterContext } from "../Context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Products;
