//import Form from "./components/common/MyForm/MyForm";
import { BrowserRouter,
  Form,
  NavLink,
  Outlet,
  Route,
  Routes, 
  } from 'react-router';
//import Counter from "./components/Counter/Counter";
//import Home from "./components/HomePage/HomePage";
import Header from "./components/common/Header/Header"
import Card from './components/common/WeatherCard/Card';


function App(){
  return (
    <div>
      <Header />
      <Card country="Messadine" date="January" tempr="31" />
      <Outlet />
    </div>
  );
}

export default App;

/*

<BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/counter" element={<Counter />} />
    </Routes>

    <Header />
    <nav>
      <NavLink to="/" 
      /*className={({ isActive, isPending }) => 
  isPending ? "pending" : isActive ? "active" : ""
  style={({ isActive }) => ({
    color: isActive ? "#A8EB12" : "#051937"
  })
  }*/
  /*>
  Home Page
  </NavLink>
  <br />
  <NavLink to="/counter" 
    style={({ isActive }) => ({
      color: isActive ? "#A8EB12" : "#051937"
    })
  }
  >
  Counter Page
  </NavLink>
  </nav>

  <CounterSecond />

  </BrowserRouter>






import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/
