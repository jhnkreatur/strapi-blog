import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import appStyles from "./app.module.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className={appStyles.container}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
