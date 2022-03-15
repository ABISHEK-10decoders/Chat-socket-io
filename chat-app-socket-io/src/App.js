import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import Gif from "../src/asscts/Gif"
// import Chat from "../src/pages/chat/Chat"
import Loading from "../src/Loading/Loading"
// import Login from "../src/pages/login/Login"
// const Login = lazy(() => import('./pages/login/Login'))
const FetchData = lazy(() => import('./fetch_data/FetchData'))




function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>
        <Loading />
      </div>}>
        <Routes>
          {/*         
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} /> */}
          <Route path="/" element={<FetchData />} />

        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
