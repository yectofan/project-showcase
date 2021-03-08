import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Home from './Pages/Home';
import CV from './Pages/CV';
import HoleInTheWall from './Pages/Projects/Hole-In-The-Wall';
import VRFirepit from './Pages/Projects/VR-Firepit';
import VRDataVisualisation from './Pages/Projects/VR-Data-Visualisation';
import BallPhysics from './Pages/Projects/Ball-Physics';
import BankingApp from './Pages/Projects/Banking-App';
import MacabreMaze from './Pages/Projects/Macabre-Maze';
import ThreeDRenderer from './Pages/Projects/3D-Renderer';
import ThreeDModelling from './Pages/Projects/3D-Modelling';
import Stack from './Pages/Projects/Stack';
import Rooms from './Pages/Projects/Rooms';

function App() {
  return (
    <div className="App">
      <Router className="Page" basename={`/${process.env.PUBLIC_URL}`}>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/CV" component={CV}/>
          <Route path="/Hole-In-The-Wall" component={HoleInTheWall}/>
          <Route path="/VR-Firepit" component={VRFirepit}/>
          <Route path="/VR-Data-Visualisation" component={VRDataVisualisation}/>
          <Route path="/Ball-Physics" component={BallPhysics}/>
          <Route path="/Banking-App" component={BankingApp}/>
          <Route path="/Macabre-Maze" component={MacabreMaze}/>
          <Route path="/3D-Renderer" component={ThreeDRenderer}/>
          <Route path="/3D-Modelling" component={ThreeDModelling}/>
          <Route path="/Stack" component={Stack}/>
          <Route path="/Rooms" component={Rooms}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
