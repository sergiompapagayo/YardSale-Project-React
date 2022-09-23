import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState';

import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import CreateAccount from '@pages/CreateAccount';
import RecoveryPassword from '@pages/RecoveryPassword';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import EditAccount from '@pages/EditAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';

import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<CreateAccount/>}/>
            <Route exact path="/password-recovery" element={<PasswordRecovery/>}/>
            <Route exact path="/send-email" element={<SendEmail/>}/>
            <Route exact path="/new-password" element={<NewPassword/>}/>
            <Route exact path="/account" element={<MyAccount/>}/>
            <Route exact path="/edit-account" element={<EditAccount/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/orders" element={<Orders/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
