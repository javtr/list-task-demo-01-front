import "./App.css";
import ListContainer from "./components/listContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <div className="">
      <StoreProvider>
        <ListContainer />
      </StoreProvider>
    </div>
  );
}

export default App;
