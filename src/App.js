import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      {<Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
