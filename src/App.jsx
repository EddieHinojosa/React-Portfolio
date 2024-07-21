import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
//imports components
import Header from './components/header/Header';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
//imports bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
