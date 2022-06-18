import logo from './logo.svg';
import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import Headers  from './components/Header';

import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter><Main></Main></BrowserRouter>       
    </div>
  );
}

export default App;
