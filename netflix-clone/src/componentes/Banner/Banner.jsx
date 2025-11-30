// import React, { use, useEffect } from 'react'
// import axios from '../../utils/axios'
// import requestes from '../../utils/requestes'

// const Banner = () => {
//     const{movie,setMovie}=React.useState({})
//     useEffect(()=>{
//         (async()=>{
//             try {
//                 const request=await axios.get(requestes.fetchNetflixOriginals);
//                 setMovie(request.data.results[
//                     Math.floor(Math.random()*request.data.results.length-1)
//                 ]);
//             } catch(error){
//                 console.log("Error",error);
//             }
//             }
//   return (
//     <div
//      ClassName='banner'
//      style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tdb.org/t/p/orignal${movie?.backdrop_path}")`,
//         backgroundPosition: "center center",
//         backgroundRepeat: "no-repeat",                                                                                                          
//      }}
//      >
//       <div className='banner_contents'>
//         <h1 className='banner_title'>
//             {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//             <button className='banner_button'>Play</button>
//             <button className='banner_button'>My List</button>
//         </div>
//         <h1 className='banner_description'>
//             {truncate(movie?.overview,150)}
//         </h1>
//       </div>
//       <div className='banner--fadeBottom'/>
//     </div>
//   )
// }

// export default Banner


import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requestes from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requestes.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  // truncate function
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(0, n - 1) + "..." : text;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
