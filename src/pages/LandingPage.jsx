import React, { useState } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState('');

  const teamMembers = [
    {
      name: "Amelia Joseph",
      position: "Chief Manager",
      description: "Leading the vision and strategy for Green Gate's mission across MENA region.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ahmed Al-Rashid",
      position: "Environmental Coordinator",
      description: "Expert in sustainable development and environmental policy implementation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Benali",
      position: "Youth Engagement Lead",
      description: "Passionate about empowering young leaders and creating meaningful opportunities.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Omar Hassan",
      position: "Community Outreach",
      description: "Building bridges between communities and fostering collaborative initiatives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const opportunities = [
    {
      icon: "💼",
      title: "Opportunities",
      description: "Find opportunities to volunteer in key events and be heard."
    },
    {
      icon: "🎓",
      title: "Fellowship",
      description: "Join our fellowship program and be part of a great team that will help you achieve your goals."
    },
    {
      icon: "📺",
      title: "Webinars",
      description: "Attend different webinars regarding topics like environmental and political issues."
    },
    {
      icon: "👥",
      title: "Community",
      description: "Be a part of an amazing community that is always there for you to help you achieve your goals."
    }
  ];

  const values = [
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Sustainability",
      description: "Committed to environmental protection and sustainable development"
    },
    {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Youth Empowerment",
      description: "Empowering the next generation of leaders and changemakers"
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Freedom",
      description: "Supporting freedom of expression and democratic values"
    }
  ];

  const faqs = [
    "How do I sign up for the project?",
    "What thing that I should prepare before starting?",
    "Does my company need help for marketing services?"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Empowering Youth, Reviving Nature</h1>
            <p className="hero-subtitle">
              MENA's first platform providing environmental and political
              opportunities for youth from MENA's youth to MENA's youth.
            </p>
            <button className="hero-button">JOIN US NOW!</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics" id="about">
        <div className="statistics-container">
          {/* Statistics Left Side */}
          <div className="stats-left">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">245%</div>
                <div className="stat-label">Youth Growth</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">130K+</div>
                <div className="stat-label">Audience Reached</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Events Hosted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24+</div>
                <div className="stat-label">Countries Involved</div>
              </div>
            </div>
          </div>

          {/* Commitments Right Side */}
          <div className="commitments-right">
            <h2 className="commitments-title">Commitments</h2>
            <p className="commitments-text">
              We are dedicated to understanding your goals and creating strategies
              that will help you achieve them. Our team works tirelessly to provide
              the best opportunities and support for MENA youth.
            </p>
            <a href="#learn-more" className="learn-more-link">Learn More</a>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities" id="opportunities">
        <div className="opportunities-container">
          {/* Left Side - Introduction */}
          <div className="opportunities-intro">
            <h2 className="opportunities-title">What Can You Do?</h2>
            <p className="opportunities-text">
              Local action is the foundation of global change. Every small step
              you take in your community creates a ripple effect that can transform
              the entire MENA region.
            </p>
            <div className="opportunities-image">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Youth community"
                className="intro-image"
              />
            </div>
          </div>

          {/* Right Side - Opportunities Grid */}
          <div className="opportunities-grid">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="opportunity-card">
                <div className="opportunity-icon">
                  <div className="icon-background">
                    {opportunity.icon}
                  </div>
                </div>
                <h3 className="opportunity-title">{opportunity.title}</h3>
                <p className="opportunity-description">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values-container">
          <div className="values-header">
            <h2 className="values-title">Our Values</h2>
            <p className="values-subtitle">what we believe in?</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-image">
                  <img src={value.image} alt={value.title} />
                </div>
                <div className="value-content">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="values-cta">
            <button className="values-button">See More</button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="team-container">
          <div className="team-header">
            <h2 className="team-title">Our Team</h2>
          </div>

          <div className="team-carousel">
            <div className="carousel-container">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <p className="member-description">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-btn prev-btn"
                onClick={prevSlide}
              >
                ←
              </button>
              <button
                className="carousel-btn next-btn"
                onClick={nextSlide}
              >
                →
              </button>
            </div>

            <div className="carousel-dots">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq-container">
          {/* FAQ Left Side */}
          <div className="faq-left">
            <div className="faq-list">
              {faqs.map((question, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question">
                    <p>{question}</p>
                    <div className="faq-icon">
                      <span>●</span>
                    </div>
                  </div>
                </div>
              ))}
              <a href="#more-faq" className="more-faq-link">More FAQ</a>
            </div>
          </div>

          {/* Newsletter Right Side */}
          <div className="newsletter-right">
            <h2 className="newsletter-title">How Can We Help You?</h2>
            <p className="newsletter-text">
              Subscribe to our newsletter to stay updated with the latest
              opportunities, events, and news from Green Gate. Join thousands
              of youth across MENA who are making a difference.
            </p>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;