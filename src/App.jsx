import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ColorSetter from './ColorSetter';
import ColorReader from './ColorReader';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<ColorSetter/>}/>
        <Route path='/favorite' element={<ColorReader/>}/>
      </Routes>
    </div>
  );
}

export default App;
