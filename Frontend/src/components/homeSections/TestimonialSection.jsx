import { useEffect, useRef } from "react";
import "../../styles/testimonials.css";
import s1 from "../../assets/images/testimonials/student-1.jpg";
import s2 from "../../assets/images/testimonials/student-2.jpg";
import s3 from "../../assets/images/testimonials/student-3.jpg";
import s4 from "../../assets/images/testimonials/student-4.jpg";

const TestimonialSection = () => {
  const trackRef = useRef(null);
  let speed = 0.6; // 🔥 speed control

  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let paused = false;

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    const animate = () => {
      if (!paused) {
        x -= speed;

        // 🔥 EXACT reset point (NO DELAY)
        if (Math.abs(x) >= track.scrollWidth / 2) {
          x = 0;
        }

        track.style.transform = `translateX(${x}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const data = [
    {
      img: s1,
      name: "Ananya Gupta",
      role: "Student",
      text:
        "This course helped me gain confidence and clarity. The structure was very easy to follow.",
    },
    {
      img: s2,
      name: "Rohit Sharma",
      role: "Student",
      text:
        "Amazing mentorship and guidance. I was able to crack my interviews with ease guidance.",
    },
    {
      img: s3,
      name: "Pooja Mehta",
      role: "Student",
      text:
        "One of the best learning experiences I have ever had. Highly recommended students.",
    },
    {
      img: s4,
      name: "Rahul Verma",
      role: "Student",
      text:
        "Structured roadmap and great support. Helped me stay consistent and confident students.",
    },
  ];

  return (
    <section className="testimonial-section">
      <span className="testimonial-tag">TESTIMONIALS</span>
      <h2>
        What Our Students <span>Say’s</span>
      </h2>

      <div className="testimonial-slider">
        <div className="testimonial-cards" ref={trackRef}>
          {[...data, ...data].map((item, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">★★★★★</div>
              <p>{item.text}</p>

              <div className="testimonial-user">
                <img src={item.img} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
