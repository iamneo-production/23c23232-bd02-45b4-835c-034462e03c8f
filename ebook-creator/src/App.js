import logo from './logo.svg';
import './App.css';
import Login from './App Components/Technical Components/Login/Login';
import Registration from './App Components/Technical Components/Registration';
import Canvas from './App Components/Technical Components/Canvas/Canvas';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/canvas" element={<Canvas/>} />
    </Routes>
  );
}

export default App;
