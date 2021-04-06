import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAdmin, logoutClient, selectAdmin, selectClient } from './features/users/userSlice';

import Main from './admin/Main';
import Navbar from './admin/Navbar';
import Sidebar from './admin/Sidebar';

import Login_Form from './components/Login_Form';

function App() {

  const dispatch = useDispatch()
  
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const openSidebar = () => {
    setsidebarOpen(true);
  };

  const closeSidebar = () => {
    setsidebarOpen(false);
  };


  const client = useSelector(selectClient)
  const admin = useSelector(selectAdmin)

  console.log("Client>> ", client);
  console.log("Admin>>> ", admin);

  return (
    ( (!admin && !client) ? <Login_Form />
        : 
        (admin ? <div className="container">
                  <Navbar  sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
                  <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
                  <Main />
                </div>
            : <div> 
                <h1> Client Side </h1>
                <button onClick= {() => { dispatch(logoutClient()) }}> logout </button>
              </div>
          )
    )
  );
}

export default App;
