import "./styles.css";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ResultPage from "./pages/ResultPage";
import BufferPage from "./pages/BufferPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/result/:uuid">
            <BufferPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
