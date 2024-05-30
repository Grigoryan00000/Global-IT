import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AppRoutes from './router/AppRoutes';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <AppRoutes show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
