import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Gif from "../src/asscts/Gif"
import Chat from "../src/pages/chat/Chat"
// import Login from "../src/pages/login/Login"
const Login = lazy(() => import('./pages/login/Login'))



function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div>
        <h2> Loading....</h2>
      </div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
