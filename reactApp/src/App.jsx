//import Form from "./components/common/MyForm/MyForm";
import { BrowserRouter as Router,
  Route,
  Routes 
  } from 'react-router-dom';
import Counter from "./components/Counter/Counter";
import Home from "./components/HomePage/HomePage";


function App(){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
    </Router>
    
    /*<div class="mainBlock">
      <MyComponent 
        title="Пользовательский заголовок 1" 
        description="Hola:)"
      />

      <Form />
    </div>*/
  );
}

export default App;

/*
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
