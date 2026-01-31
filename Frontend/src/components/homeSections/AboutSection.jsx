import "../../styles/about.css";
import imgMain from "../../assets/images/about/about-main.jpg";
import imgSmall1 from "../../assets/images/about/about-small-1.jpg";
import imgSmall2 from "../../assets/images/about/about-small-2.jpg";

const AboutSection = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">

        {/* LEFT IMAGE COLLAGE */}
        <div className="about-images">
          <img src={imgMain} className="img-rect" alt="about" />

          <img src={imgSmall1} className="img-circle" alt="students" />

          <img src={imgSmall2} className="img-rounded" alt="learning" />

          <div className="trusted-badge">
            <span>30 Years</span>
            <p>Of Experience</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag">ABOUT US</span>

          <h2>
            Our Education System <span>Inspires</span> You More.
          </h2>

          <p className="about-desc">
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour.
          </p>

          {/* SERVICES */}
          <div className="about-services">
            <div className="service">
              <div className="icon">🎓</div>
              <div>
                <h4>Edukation Services</h4>
                <p>
                  It is a long established fact that reader will be distracted.
                </p>
              </div>
            </div>

            <div className="service">
              <div className="icon">🌍</div>
              <div>
                <h4>International Hubs</h4>
                <p>
                  It is a long established fact that reader will be distracted.
                </p>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="about-actions">
            <button className="primary-btn">DISCOVER MORE</button>
            <div className="contact">
              <span>📞</span>
              <p>+91 123 456 7890</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
