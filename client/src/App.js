import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import PokeDetail from "./components/PokeDetail"
import PokeCreate from "./components/PokeCreate"


function App() {
  return (

    <BrowserRouter>
        <div className="App">
          <Switch> 
          <Route exact path='/' component={LandingPage}/>
          <Route path="/home" component={Home}/>
          <Route path="/home:id" component={PokeDetail}/>
          <Route path="/pokemon" component={PokeCreate}/>
          </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
