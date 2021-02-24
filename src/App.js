import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import CV from './Pages/CV';

function App() {
  return (
    <div className="App">
      <Router className="Page" basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar/>
        <Switch>
          <Route path="/CV" exact component={CV}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
