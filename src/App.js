import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
   }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <br/><hr/>
      <Mybutton count={count} onClick={handleClick}/>
      <Mybutton count={count} onClick={handleClick}/>
      <br/><hr/>
      <Gallery/>
      <br/><hr/>
    </div>
  );
}

function Mybutton({count, onClick}){
    
 
  return (
   <button onClick={onClick}>
     Clicked {count} times
   </button>
  );
   
  
 }

 function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </div>
      
  );
}




