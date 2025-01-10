import React from "react";
import { FaMountain } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg";
import { LiaDogSolid } from "react-icons/lia";

function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <FaMountain size={40} style={{ margin: "10px" }} />
      <CgCoffee size={40} style={{ margin: "10px" }} />
      <LiaDogSolid size={40} style={{ margin: "10px" }} />
      <p>Loading your videos... Hang tight!</p>
    </div>
  );
}

export default Loader;

// import React, { useState, useEffect } from 'react';
// import Loader from './Loader';

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const preloadVideos = async () => {
//       const video1 = new Image();
//       video1.src = '/path-to-teatime.mp4';
//       const video2 = new Image();
//       video2.src = '/path-to-thevibetrim.mp4';

//       video2.onload = () => setIsLoading(false);
//     };

//     preloadVideos();
//   }, []);

//   return (
//     <div>
//       {isLoading ? <Loader /> : <div>Your main app content goes here!</div>}
//     </div>
//   );
// }

// export default App;
