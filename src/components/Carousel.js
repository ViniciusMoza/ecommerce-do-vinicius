import React, { useState } from "react";
import "./Carousel.css";
import carouselItems from "../data/carrossel"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = carouselItems.length;

  
  const itemWidth = 170; 

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
        {[...carouselItems, ...carouselItems].map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imagem} alt={`Imagem ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;




















// import React, { useState } from "react";
// import "./Carousel.css";

// const Carousel = () => {
//   const items = Array.from({ length: 7 }, (_, index) => ({
//     id: index + 1,
//     color: `hsl(${(index + 1) * 45}, 70%, 60%)`, // Gera cores diferentes
//   }));

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Função para ir para o próximo item
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex === items.length - 1) {
//         // Voltar para o primeiro item após o último
//         return 0;
//       }
//       return prevIndex + 1;
//     });
//   };

//   // Função para ir para o item anterior
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       if (prevIndex === 0) {
//         // Voltar para o último item ao ir para trás
//         return items.length - 1;
//       }
//       return prevIndex - 1;
//     });
//   };

//   return (
//     <div className="carousel-container">
//       <button className="carousel-button prev" onClick={prevSlide}>
//         &lt;
//       </button>
//       <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 170}px)` }}>
//         {/* Duplicando os itens para criar a sensação de loop */}
//         {[...items, ...items].map((item) => (
//           <div
//             key={item.id}
//             className="carousel-item"
//             style={{ backgroundColor: item.color }}
//           >
//             Item {item.id}
//           </div>
//         ))}
//       </div>
//       <button className="carousel-button next" onClick={nextSlide}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
