
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert =(msg,type)=>{
    setAlert({
      message:msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light')
    { setMode('dark');
      showAlert("Dark mode has been enabled","success");
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled","success");
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter The text to analyze" mode={mode}/>
   {/* <div className="container">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to analyze" mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div> */}
    </Router>   
    </>
  );
}

export default App;
