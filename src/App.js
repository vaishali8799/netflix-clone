import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/LoginPage';

function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
      {!user ? (<Login />) : (
                <Switch>
                <Route path="/">
                  <Home/>
          </Route>
          </Switch>
      )}
      

          
        
      </Router>
      
    
    </div>
  );
}

export default App;
