import store  from './redux/store';
import { Provider } from 'react-redux';
import { AddTodo } from './components/AddTodo';

import './App.css';


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
          <header className="App-header">
              <div className='container'>
                <AddTodo/>
              </div>
          </header>
      </div>
    </Provider>
  );
}

export default App;
