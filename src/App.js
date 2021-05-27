import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import Footer from "./component/layout/Footer";
import Navbar from "./component/layout/Navbar";
import Routes from "./component/Routes";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <header>
            <Navbar />
          </header>
          <Routes />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
