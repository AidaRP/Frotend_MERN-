import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './containers/Register/Register'
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Welcome from './containers/Welcome/Welcome';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
