import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddDoctor from './Components/AddDoctor/AddDoctor/AddDoctor';

export const UserContext = createContext()
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route  path="/appointment">
      <Appointment></Appointment>
       </Route>
       <Route  path="/dashboard/allPatients">
        <AllPatients></AllPatients>
       </Route>
       <Route  path="/dashboard/appointment">
        <Dashboard></Dashboard>
       </Route>
       <Route path="/addDoctor">
         <AddDoctor></AddDoctor>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
