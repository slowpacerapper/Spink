import React, { useContext, useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Home } from "./pages";
import { Gadgets } from "./pages";
import { Preview } from "./pages";
import { Cart } from "./pages";
import { Checkout } from "./pages";
import Footer from "./components/Footer/Footer";
import { ACTIONS, Context } from "./ReducerContext/ReducerContext";

const App = () => {
  const [search, setSearch] = useState("");
  const [dispatch, state] = useContext(Context);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("cart"));
    dispatch({ type: ACTIONS.REFRESH, payload: raw });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />

          <Route
            path="/Gadgets"
            element={<Gadgets search={search} setSearch={setSearch} />}
          />

          <Route path="/Preview" element={<Preview />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
