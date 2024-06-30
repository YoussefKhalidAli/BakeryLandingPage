// Imported style
import "./Banners.css";

// Imported tools
import { forwardRef, useEffect, useState } from "react";

import img1 from "../../assets/zack-payne-NFaTmUTpbXk-unsplash.jpg";
import img2 from "../../assets/david-holifield-gXgwsCshtnc-unsplash.jpg";
import img3 from "../../assets/emily-studer-gT-6atvGlFU-unsplash.jpg";
import img4 from "../../assets/jason-leung-fXAuCMEYGY4-unsplash.jpg";
import img5 from "../../assets/melissa-walker-horn-4on47p0-bk4-unsplash.jpg";

const Banners = forwardRef(({}, ref) => {
  const content = [img1, img2, img3, img4, img5];
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDivIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [content.length]);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentDivIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentDivIndex((prevIndex) => (prevIndex + 1) % content.length);
    }
  };

  return (
    <>
      <div className="slider" ref={ref}>
        <button className="arrow prev" onClick={() => handleArrowClick("prev")}>
          &lt;
        </button>
        {content.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentDivIndex ? "active" : ""}`}
            style={{
              left: `${(index - currentDivIndex) * 100}%`,
            }}
          >
            <img src={item} alt={`Slide ${index}`} className="banner" />
          </div>
        ))}
        <button className="arrow next" onClick={() => handleArrowClick("next")}>
          &gt;
        </button>
      </div>
    </>
  );
});

export default Banners;
