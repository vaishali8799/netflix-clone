import './App.css';
import Home from './components/Home';

import {login,logout, userSelect} from './features/userSlice'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/LoginPage';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch,useSelector } from 'react-redux'

function App() {
  const user = useSelector(userSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    const authChange = auth.onAuthStateChanged(
      userAuth => {
        if (userAuth) {
          dispatch(login({
            id: userAuth.uid,
            email:userAuth.email
          }))
          console.log(userAuth)
        }
        else {
          //logged out
          dispatch(logout());
        }
      }
    )
    return () => {
      authChange();
    }
  },[dispatch])
  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      )}
      </Router>
    </div>
  );
}

export default App;
