import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { buyCake, restockCake } from "./cakeSlice";

const CakeComponent = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of cakes: {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(restockCake(5))}>Restock Cakes</button>
    </div>
  );
};

export default CakeComponent;
