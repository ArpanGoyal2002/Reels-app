import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/login';
import Home from './components/home';
import AuthProvider from "./AuthProvider";
import { useEffect } from 'react';
import { firestore } from "./firebase"
let App = () => {
  // useEffect(() => {

    // firestore.collection("users").add({body:"this is val 2"});
    // async function f() {

    //   let querysnapshot = await firestore.collection("users").get();
    //   for (let i = 0; i < querysnapshot.docs.length; i++) {
    //     console.log(querysnapshot.docs[i].id);
    //   }
    // }
    // f();

  // }, []);


  return <>



    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>
    </AuthProvider>
  </>
}

export default App;
