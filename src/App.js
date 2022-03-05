import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white"
      setAlert('Dark Mode Enabled')
      setTimeout(() => {
        setAlert(null)
      }, 1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
      setAlert('Light Mode Enabled')
      setTimeout(() => {
        setAlert(null)
      }, 1500)
    }
  }
  return (
      <>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
        <Routes>
            <Route path="/" element={ <TextForm mode={mode} />}></Route>
            <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
        </div>
      </>
  );
}

export default App;
