import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import Header from './components/Header';
import Mainbox from './components/Mainbox';


function App() {
  const [data, setData] = useState([]);
      useEffect(()=>{
          fetch("https://api.github.com/repos/facebook/react/issues").then((response)=>{
            response.json().then((result)=>{
                console.log(result);
               setData(result);
            })
          })
      },[]);
  return (
    <div className="App">
     <Header data={data}>

     </Header >
     {/* <Mainbox  data={data}/> */}
    </div>
  );
}

export default App;
