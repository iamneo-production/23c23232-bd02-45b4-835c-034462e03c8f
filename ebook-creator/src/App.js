import logo from './logo.svg';
import Login from './App Components/Technical Components/Login/Login';
import Registration from './App Components/Technical Components/Registration/Registration';
import Canvas from './App Components/Technical Components/Canvas/Canvas';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/canvas" element={<Canvas/>} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
