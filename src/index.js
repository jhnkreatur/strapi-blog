//@ts-check
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Blog from "./routes/Blog/Blog";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import Error from "./routes/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import appStyles from "./app.module.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
