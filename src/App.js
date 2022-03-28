import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './containers/Register/Register'
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
