import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/*createRoot(document.getElementById('root')).render(
  <RouterProvider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
)*/

