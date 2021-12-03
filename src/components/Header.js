import React from "react";
import '../header.css';
import Home from './Home'
import { BrowserRouter as Router ,Link,Routes,Route, BrowserRouter } from "react-router-dom";
import Mainbox from "./Mainbox";


export default function Header({data}){
    return(
        <div className="header">
            <div className="upperheader">
               <strong>  <a className="link" href="/">facebook</a></strong>/<strong><a className="link"  href="/">React</a></strong>
               <span style={{margin:10,fontFamily:"monospace",backgroundColor:"white", border:"2px solid black",borderRadius:"10px" }}>Public</span>
               <span id="notification">Notifications</span>
            </div>
           <div className="router">
         <Router>
             <Link className="linkers" to='/'>&lt;&gt;Code</Link>
             <Link className="linkers" to='/issues'>Pull-Requests</Link>
             <Link className="linkers" to='/'>Actions</Link>
             <Link className="linkers" to='/'>Project</Link>
             <Link className="linkers" to='/'>Wiki</Link>
             <Link className="linkers" to='/'>Security</Link>
             <Link className="linkers" to='/'>Insights</Link>


             <Routes>
                 <Route path='/' element={<Home></Home>}></Route>
                 <Route path='/issues' element={<Mainbox data={data}></Mainbox>}></Route>
             </Routes>
         </Router>
         </div>
         </div>
   
    )
}