import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Main/Redux/Store.jsx'
import Context from './Main/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Context>
        <App />
      </Context>
    </Provider>
  </React.StrictMode>,
)
