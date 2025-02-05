import React, { useState, useEffect } from "react";
import "./BannerSlide.css";

function BannerSlide({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [banners.length]);

  return (
    <div className="banner-slide">
      <img
        src={banners[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="banner-image"
      />
    </div>
  );
}

export default BannerSlide;























// import React, { useState, useEffect } from "react";
// import "./BannerSlide.css";

// function BannerSlide() {
//   const banners = [
//     "https://via.placeholder.com/1200x300/ff7f7f/333333?text=Banner+1",
//     "https://via.placeholder.com/1200x300/7fffd4/333333?text=Banner+2",
//     "https://via.placeholder.com/1200x300/ffd700/333333?text=Banner+3",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
//     }, 3000); // Muda de banner a cada 3 segundos
//     return () => clearInterval(interval); // Limpa o intervalo ao desmontar
//   }, [banners.length]);

//   return (
//     <div className="banner-slide">
//       <img
//         src={banners[currentIndex]}
//         alt={`Banner ${currentIndex + 1}`}
//         className="banner-image"
//       />
//     </div>
//   );
// }

// export default BannerSlide;

