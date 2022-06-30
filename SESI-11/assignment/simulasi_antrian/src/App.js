import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {
  const [antrian, setAntrian] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if(userInput.length === 0){
      alert("please input value");
    }else{
      setAntrian((oldArray) => [...oldArray, userInput]);
      setUserInput("");
    }
  };

  const deleted = () =>{
    setAntrian(antrian.slice(1));
  };
  return (
    <div className='App'>
    <div className='btn-style'>
      <input
        type='text'
        autoFocus
        style={{ width: "300px" }}
        value={userInput}
        required
        onChange={(e) => setUserInput(e.target.value)}
      />
    </div>
    <div className='btn-style'>
      <button onClick={handleClick}>Antrikan</button>
      <button onClick={deleted}>Majukan</button>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
      {antrian.length === 0
        ? "antrian kosong"
        : antrian?.map((item, index) => <div key={index}>{`${item}=>`}</div>)}
    </div>
  </div>
  );
}

export default App;
