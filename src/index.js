import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navlist';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './React-Redux/Store';
import SignupPg from './Pages/SignUpPg';

import LogInPg from './Pages/LogInPg';




const router=createBrowserRouter([{
  path:"/",
  element:<Navbar/>,
  children:[{
    path:"Signup",
    element:<SignupPg/>
  },
  {
    path:"Login",
    element:<LogInPg/>
  }

  ]

}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
