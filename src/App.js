
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/redux';
import FormsContainer from './Components/FormsContainer';
import ButtonsContainer from './Components/ButtonsContainer';

function App() {
  return (
    <div class="app">
    <Provider store={store}>
        <ButtonsContainer/>
        <FormsContainer/>
    </Provider>
    </div>
  );
}

export default App;
