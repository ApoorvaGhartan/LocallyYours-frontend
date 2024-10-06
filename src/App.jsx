import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
 
function App() {
  
  const fetchAPI = async ()=>{
    const response = await axios.get("http://localhost:3000/api");
    console.log(response);
  }
 useEffect(()=>{
  fetchAPI();
 },[])
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  )
}

export default App
