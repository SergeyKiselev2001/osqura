
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/redux';
import FormsContainer from './Components/FormsContainer';
import ButtonsContainer from './Components/ButtonsContainer';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div class="app">
    
        <Provider store={store}>

            <Routes>
                <Route path='/' element={<ButtonsContainer/>}/>

            </Routes>

            <FormsContainer/>

            
        </Provider>
 

    </div>
  );
}

export default App;
