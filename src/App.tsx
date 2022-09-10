import "./App.css";
import Pagination from "./components/Pagination";
import HomePage from "./pages/MainPage";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Pagination />
    </div>
  );
}

export default App;
