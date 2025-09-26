import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about">
      <header className="about-hero">
        <h1 className="about-title">About us</h1>
      </header>

      <div className="about-section">
        <div className="about-top">
          <div className="about-left">
            <h2 className="about-heading">Driving Change Through Innovation and Youth Power</h2>
          </div>
          <br />
          <figure className="about-figure">
            <img
              src="src\assets\img\frame2_aboutus.png"
              alt="Team in a meeting"
            />
            <figcaption className="about-caption">
              <span className="about-cap-title">Executive Board members</span>
              <br />
              <span className="about-cap-right">London, 2025</span>
            </figcaption>
          </figure>
        </div>

        <div className="about-paragraphs">
          <p>
            Innovation is at the core of everything we do at Green Gate. From the very beginning, we've believed <br /> that solving today’s climate challenges requires bold ideas, fresh perspectives, and a deep connection <br /> with nature. By empowering youth across the MENA region, we’re building a movement that blends <br /> environmental action with creative solutions. <br />
            Our work spans across climate education, ecological restoration, youth mobilization, and green <br /> advocacy — all rooted in innovation, community, and purpose. We continuously explore new <br /> approaches to create meaningful change, amplify impact, and inspire the next generation of <br /> environmental leaders. <br />
            Join us as we reimagine what’s possible — and take action for a more just, green, and regenerative <br /> future.
          </p>

        </div>

        <div className="about-banner">
          <img
            src="src\assets\img\frame3_aboutus.png"
            alt="Forest"
          />
          <div className="about-banner-text">Building a consistent future generation</div>
        </div>

        <div className="about-bottom">
          <p>
            From the very beginning, innovation has been woven into Green Gate’s DNA. It's more than just a value  — it's the engine driving our mission forward. Our founding members saw a critical gap: the need to  empower youth as leaders in shaping a more sustainable future. They knew that real impact required  fresh thinking, bold actions, and the courage to disrupt the status quo. <br />
            This commitment to innovative, youth-led solutions has fueled our work across climate advocacy, <br /> ecological restoration, and environmental education. We’ve built a culture that thrives on <br /> experimentation, embraces collaboration, and turns challenges into opportunities. As we grow, we <br /> remain rooted in our mission — to be a catalyst for bold change and a beacon for the next generation of  environmental leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;


