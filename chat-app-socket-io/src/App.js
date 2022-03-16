import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Gif from "../src/asscts/Gif"
// import Chat from "../src/pages/chat/Chat"
// import Loading from "../src/Loading/Loading"
import Login from "../src/pages/login/Login"
import FetchData from './fetch_data/FetchData'
// const Login = lazy(() => import('./pages/login/Login'))
//const FetchData = lazy(() => import('./fetch_data/FetchData'))


// const AppWrapper = () => {
//   let routes = useRoutes([
//     { path = "/", element={< Login />}
//   ])
// }

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/data" element={<FetchData />} />
          <Route path="/" element={<Login />} />


        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
