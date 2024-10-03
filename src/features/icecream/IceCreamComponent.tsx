import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { buyIceCream, restockIceCream } from "./iceCreamSlice";

const IceCreamComponent = () => {
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of icecreams: {numOfIceCreams} </h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
      <button onClick={() => dispatch(restockIceCream(10))}>
        Restock icecreams
      </button>
    </div>
  );
};

export default IceCreamComponent;
