import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
         <nav>
          <Link to="post">Post </Link>
          <Link to="delete">Delete</Link>
          <Link to="update">Update</Link>
        </nav>
        
        <Outlet/>
    
    
    </>

        
    

  )
}
