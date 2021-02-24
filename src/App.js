import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import CV from './Pages/CV';

function App() {
  return (
    <div className="App">
      <Router className="Page" basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar/>
        <Route path="/" exact component={Home}/>
        <Route path="/CV" component={CV}/>
      </Router>
    </div>
  );
}

export default App;
