import React from 'react';
import img1 from "./imagesrc.jpg";
import img2 from "./imagepublic.jpg";
import YouTube from "react-youtube";
import './App.css';

function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1px black ',maxwidth:"100vw"}}> </div>
       <h1 className="title red">Your name here</h1>
       <img src={img1}/>
       <img src={img2}/>
    
  

<YouTube videoId={"9GtB5G2xGTY"} />
 </div>
  );
}

export default App;
