import React, { useContext, useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import { Home } from "./pages";
import { Gadgets } from "./pages";
import { Preview } from "./pages";
import { Cart } from "./pages";
// import { Checkout } from "./pages";
import Footer from "./components/Footer/Footer";
import { ACTIONS, Context } from "./ReducerContext/ReducerContext";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [search, setSearch] = useState("");
  const [dispatch, state] = useContext(Context);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem("cart"));
    if (raw) {
      dispatch({ type: ACTIONS.REFRESH, payload: raw });
    }
  }, [dispatch]);

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
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
