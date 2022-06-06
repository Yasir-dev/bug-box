import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import Navigation from "./navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>  
        <Navigation/>
      </Provider>
    </>
  );
}
