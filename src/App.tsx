import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.scss";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Main from "./components/Main";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const objRef = document.body;
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    objRef.classList.add("stop-scrolling");
    setTimeout(() => {
      setLoading(false);
      objRef.classList.remove("stop-scrolling");
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ type: "ease-in", duration: 5 }}
            exit={{ opacity: 0 }}
          >
            <LoadingScreen />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
