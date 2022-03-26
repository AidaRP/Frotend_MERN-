import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register/Register'
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
