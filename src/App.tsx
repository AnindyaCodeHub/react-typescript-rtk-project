import "./App.css";
import CakeComponent from "./features/cake/CakeComponent";
import IceCreamComponent from "./features/icecream/IceCreamComponent";
import Usercomponent from "./features/user/UserComponent";

function App() {
  return (
    <div className="App">
      <CakeComponent />
      <IceCreamComponent />
      <Usercomponent />
    </div>
  );
}

export default App;
