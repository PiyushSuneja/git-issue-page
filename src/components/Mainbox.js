import React from 'react'
import { useEffect,useState } from 'react'
import Smallbox from './Smallbox';
import { Select,MenuItem,FormControl,InputLabel } from "@material-ui/core";
import '../mainbox.css';
export default function Mainbox({data}){
  

    return(

        <div className="mainbox">
        
            <div className="small-upper">
                
            <div className="big-dot"><div className="dot"></div></div>
            <div><span style={{margin:"10px"}}>625 Open</span></div>
              <div className=" fields">
           
           <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel className="field" id="demo-simple-select-standard-label">Author</InputLabel>
           <Select className="field"
             labelId="demo-simple-select-standard-label"
             id="demo-simple-select-standard"
            
           
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem >Ten</MenuItem>
             <MenuItem >Twenty</MenuItem>
             <MenuItem >Thirty</MenuItem>
           </Select>
         </FormControl>

         <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel className="field" id="demo-simple-select-standard-label">Label</InputLabel>
           <Select className="field"
             labelId="demo-simple-select-standard-label"
             id="demo-simple-select-standard"
            
           
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem >Ten</MenuItem>
             <MenuItem >Twenty</MenuItem>
             <MenuItem >Thirty</MenuItem>
           </Select>
         </FormControl>
         <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel className="field" id="demo-simple-select-standard-label">Projects</InputLabel>
           <Select className="field"
             labelId="demo-simple-select-standard-label"
             id="demo-simple-select-standard"
            
           
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem >Ten</MenuItem>
             <MenuItem >Twenty</MenuItem>
             <MenuItem >Thirty</MenuItem>
           </Select>
         </FormControl>
         <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }}>
           <InputLabel className="field" id="demo-simple-select-standard-label">MileStone</InputLabel>
           <Select className="field"
             labelId="demo-simple-select-standard-label"
             id="demo-simple-select-standard"
            
           
           >
             <MenuItem value="">
               <em>None</em>
             </MenuItem>
             <MenuItem >Ten</MenuItem>
             <MenuItem >Twenty</MenuItem>
             <MenuItem >Thirty</MenuItem>
           </Select>
         </FormControl>
   
   
                </div>
               </div>
           {
               data.map((i)=>
               
               <div key={i.id}><Smallbox comments={i.comments} title={i.title} avatar={i.user.avatar_url} 
               labels={i.labels}
               ></Smallbox></div>
               )
           }
        </div>
    )
}