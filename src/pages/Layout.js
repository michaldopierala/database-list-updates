import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route, Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <>
      <nav className='navigation'>
        <Link className='btn' to="post">Post </Link>
        <Link className='btn' to="delete">Delete</Link>
        <Link className='btn' to="update">Update</Link>
      </nav>
      <Outlet />
    </>
  )
}
