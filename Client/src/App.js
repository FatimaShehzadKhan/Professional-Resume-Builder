import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import axios from "axios";
import './App.css';


function App() {

  const [user, setUser]= useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/user");
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };  
  useEffect(()=>{
    fetchData();
  }, [])
  return (
    <div className="App">
      <Header />
      <Body />
      </div>
  );
}

export default App;
