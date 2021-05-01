import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import StartTop from './Components/StartTop';

function App() {
  return (
    <>
     <BrowserRouter>
     <StartTop/>
     <Switch>
       <Route exact path="/"> <SignUp/> </Route>
       <Route path="/login"> <Login /> </Route>
     </Switch>
     
     </BrowserRouter>
    </>
  );
}

export default App;
