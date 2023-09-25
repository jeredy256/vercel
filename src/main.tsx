import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, } from 'react-router-dom'
import MainRouters from './Routers';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
      <MainRouters />
  </Router>
);
