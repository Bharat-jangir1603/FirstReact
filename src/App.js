import './App.css';
import About from './view/About';
import Alert from './view/Alert';
import Navbar from './view/Navbar';
import Textarea from './view/Textarea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  let activemode = () => {
    if (Mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode active', 'Success');
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode active', 'Success');
    }
  }
  return (

    <Router>
      <Navbar title='FirstReact' mode={Mode} activemode={activemode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />}>
          <About />
        </Route>
        <Route exact path="/" element={<Textarea showAlert={showAlert} title='Enter the text to analyze below' mode={Mode} />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
