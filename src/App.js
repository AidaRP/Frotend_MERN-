import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './containers/Register/Register'
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import Welcome from './containers/Welcome/Welcome';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './containers/Profile/Profile';
import PostDetail from "./containers/PostDetail/PostDetail";
import Search from './components/Search/SearchUser';
import NotFound from "./components/NotFound/NotFound";
import PrivateZone from "./guards/PrivateZone";
import Users from "./containers/Users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<PrivateZone><Home /></PrivateZone>} />
          <Route path="/profile"element={<PrivateZone><Profile /></PrivateZone>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postDetail/:_id" element={<PostDetail />} />
          <Route path="/search/:nickname" element={<Search />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<Users />} />

        </Routes>
      <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
