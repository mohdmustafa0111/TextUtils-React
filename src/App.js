import React, { useState } from 'react';
import "./App.css";
import Alert from './components/Alert';
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
// import { Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled successfully', 'success');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled successfully', 'success');
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <Routes> */}
        {/* <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}

export default App;
