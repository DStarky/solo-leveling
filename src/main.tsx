import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux'
import Routing from './Routing'
import './styles/main.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Routing />
  </Provider>
)
