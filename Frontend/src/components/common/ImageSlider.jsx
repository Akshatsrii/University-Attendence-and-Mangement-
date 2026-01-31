import { useEffect, useState } from "react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import hero5 from "../../assets/images/hero5.jpg";
import hero6 from "../../assets/images/hero6.jpg";
import hero7 from "../../assets/images/hero7.jpg";
import hero8 from "../../assets/images/hero8.jpg";
import "../../styles/slider.css";

const images = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-content center">
        <h1>Online Education Academy</h1>
        <p>Empowering students with modern learning</p>

        <div className="hero-buttons">
          <button className="primary-btn">Our Courses</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
