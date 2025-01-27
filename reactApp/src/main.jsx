import ReactDOM from 'react-dom'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'
import Counter from './components/Counter/Counter'
import Home from './components/HomePage/HomePage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/counter', element: <Counter />},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
);


/*ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

createRoot(document.getElementById('root')).render(
  <RouterProvider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
)*/

