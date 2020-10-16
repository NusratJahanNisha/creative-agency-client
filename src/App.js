import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FinalOrder from './components/FinalOrder/FinalOrder';
import ServiceList from './components/ServiceList/ServiceList';
import Review from './components/Review/Review';
import AdminServiceList from './components/AdminServiceList/AdminServiceList';
import AddService from './components/AddService/AddService';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';


export const UserContext = createContext()
export const ServiceContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <ServiceContext.Provider value={[serviceDetails, setServiceDetails]} >

        <Router>
          <Switch>
            <Route path="/homePage">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>


            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/serviceList">
              <ServiceList></ServiceList>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>


            <PrivateRoute path="/finalOrder">
              <FinalOrder></FinalOrder>
            </PrivateRoute>
            <Route path="/adminServiceList">
              <AdminServiceList></AdminServiceList>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>


            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <NotFound> </NotFound>
            </Route>
          </Switch>
        </Router>


      </ServiceContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
