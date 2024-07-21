import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
//imports components
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
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
      <Footer />
    </div>
  )
}

export default App;
