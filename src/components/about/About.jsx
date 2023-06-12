import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get TO Know</h5> */}
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1+ Year working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 10+ Completed </small>
            </article>
          </div>
          <p>
            Software developer with a positive attitude, strong work ethic, and
            a keen desire for learning and development. In addition, an
            internship with ASAC/ LUMINUS has enhanced my skill in web
            programming, and in-depth knowledge of modern HTML/CSS and
            REACT.Also during my time at Cura كيورا, I had the privilege of
            working as a FrontEnd NextJs Developer Currently, I’m seeking to
            work in the programming industry, in the web development department,
            with a company that contains my talent.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
