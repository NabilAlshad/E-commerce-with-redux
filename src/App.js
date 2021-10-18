import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ProductListing from "./Components/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          {/* <Route path='/' exact component={ProductListing} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
