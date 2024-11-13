// import logo from './logo.svg';
import { Provider } from "react-redux";
import BodyComponent from "./components/BodyComponent";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <BodyComponent />
      </div>
    </Provider>
  );
}

export default App;
