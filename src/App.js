import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/login';
import Home from './components/home';
import AuthProvider from "./AuthProvider";
let App = () => {
  return <>
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route exact path="/login">
          <Login />
        </Route> */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>
    </AuthProvider>
  </>
}

export default App;
