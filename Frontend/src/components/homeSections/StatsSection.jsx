import "../../styles/stats.css";
import c1 from "../../assets/images/stats/icon-courses.png";
import c2 from "../../assets/images/stats/icon-students.png";
import c3 from "../../assets/images/stats/icon-teachers.png";
import c4 from "../../assets/images/stats/icon-awards.png";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stat">
        <img src={c1} />
        <h2>500</h2>
        <p>Total Courses</p>
      </div>
      <div className="stat">
        <img src={c2} />
        <h2>1900</h2>
        <p>Our Students</p>
      </div>
      <div className="stat">
        <img src={c3} />
        <h2>750</h2>
        <p>Skilled Lecturers</p>
      </div>
      <div className="stat">
        <img src={c4} />
        <h2>30</h2>
        <p>Win Awards</p>
      </div>
    </section>
  );
};

export default StatsSection;
