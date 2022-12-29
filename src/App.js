import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from 'react'
import Home from "./pages/Home";
import Update from "./pages/Update";
import Layout from "./pages/Layout";
import Post from "./pages/Post";
import Delete from "./pages/Delete";


function App() {


  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="update">Update Data</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/update" element={<Layout />}>
             <Route path="post" element={<Post />} />
            <Route path="delete" element={<Delete />} /> 
          </Route>

        </Routes>
      </Router>




    </>

  );
}

export default App;




// axios.get('http://localhost/test/people.php')
// .then(function (response) {
//   // handle success
//   console.log(response.data[0].name);
// })