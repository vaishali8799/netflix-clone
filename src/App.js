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
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  const user = useSelector(userSelect);
  console.log(user)
 
  const dispatch = useDispatch();
  useEffect(() => {
    const authChange = auth.onAuthStateChanged(
      userAuth => {
        if (userAuth) {
         
          dispatch(login({
            id: userAuth.uid,
            email: userAuth.email,
            name: userAuth.displayName,
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
        <Switch>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/Signup"><SignUp /></Route>
          <Route exact path="/Profile"><Profile/></Route>
          {user && <Route  path="/Home"><Home/></Route>}
       </Switch>
      </Router>
    </div>
  );
}

export default App;
