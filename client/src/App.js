import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import Home from "./components/Home/Home"
import PokeDetail from "./components/PokeDetail/PokeDetail"
import PokeCreate from "./components/PokeCreate/PokeCreate"


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/:id" element={<PokeDetail/>}/>
            <Route path="/pokemon" element={<PokeCreate/>}/>
          </Routes>
        </div>
    </BrowserRouter>

  );
}

export default App;
