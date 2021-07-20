import './App.css';
import {Navbar, currentUser} from './Navbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
