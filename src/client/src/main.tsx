import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.page'
import './index.css'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </React.StrictMode>,
)
