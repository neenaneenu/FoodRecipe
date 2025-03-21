import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <App />
 </Provider>
)
