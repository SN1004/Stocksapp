import React from 'react';
import './App.css';
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import Dashboard from "./dashboard/Dashboard";
import AdminLoginPage from './adminLogin/AdminLoginPage';
import {Switch, Route} from "react-router-dom";
import AdminDashboard from './adminDashboard/AdminDashboard';
import  Platform  from './landing/Platform';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin/login" component={AdminLoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/landing/Platform" component={Platform} />
      </Switch>
      {/* <LandingPage /> */}
    </main>
  );
}

export default App;
