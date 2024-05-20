import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route exact path="/app/:title" element={<GamePage />} />
          </Routes>
          <Routes>
            <Route exact path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
