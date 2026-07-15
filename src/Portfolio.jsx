import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Variable names thode unique rakhein aur path check karein
// import justiceImg from './assets/justicelens.png';
// import signImg from './assets/signbridge.png';
// import travelImg from './assets/travelgo.png';

const Portfolio = () => {
   const projects = [
  {
    title: "JusticeLens",
    desc: "AI-powered legal reference system for Pakistan's criminal law scenarios.",
    tech: ["React", "Node.js", "MySQL"],
image: "/justicelens.png",
    liveLink: "#"
  },
  {
    title: "SIGNBRIDGE",
    desc: "Real-Time Urdu Sign Language assistive technology with custom UI.",
    tech: ["React", "Express", "Framer Motion"],
image: "/signbridge.png", // Direct path from public folder
    liveLink: "#"
  },
  {
    title: "TravelGo",
    desc: "Secure travel registration platform with premium glassmorphism design.",
    tech: ["MongoDB", "Express", "Node.js"],
image: "/travelgo.png", // Direct path from public folder
    liveLink: "#"
  }
  ];

  return (
    <div className="portfolio-wrapper">
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        className="navbar"
      >
        <div className="logo">DevPortfolio</div>
        <div className="nav-links">
          <a href="#work">My work</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="badge">Full-Stack Developer</span>
          <h1>Designing the Future of <span>Web Interfaces</span></h1>
          <p>Expert in <b>MERN Stack</b> & <b>MySQL</b>. Proficient in HTML, Bootstrap, React, Express, and Node.js.</p>
          
          <div className="hero-btns">
            <a href="#work" className="primary-btn">View Projects</a>
            {/* 1. CV Button - Open in new tab */}
            <a href="/my-cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn">
              My CV
            </a>
          </div>
        </motion.div>

        <div className="hero-visual">
          <div className="cube-container">
            <div className="cube">
              <div className="face front">React</div>
              <div className="face back">Node.js</div>
              <div className="face right">MySQL</div>
              <div className="face left">MongoDB</div>
              <div className="face top">Express</div>
              <div className="face bottom">HTML/CSS</div>
            </div>
          </div>
        </div>
      </section>

     <section id="work" className="work-slider-section">
  <h2 className="section-title">My Work</h2>
  
  {/* <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000 }}
    className="mySwiper"
  > */}
<Swiper
  slidesPerView={1}
  spaceBetween={100} // Cards ke darmiyan gap barha diya
  centeredSlides={true}
  navigation={true}
  pagination={{ clickable: true }}
  modules={[Navigation, Pagination]}
  className="mySwiper"
>

    {projects.map((p, i) => (
      <SwiperSlide key={i}>
        <div className="project-slide-card">
          {/* Left Side: Image */}
          <div className="project-image-side">
             <img src={p.image} alt={p.title} className="slider-photo" />
          </div>

          {/* Right Side: Content */}
          <div className="project-info-side">
            <span className="project-number">0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            
            <div className="tech-stack">
              {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
            </div>

            <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="slider-live-btn">
              View Project <span>→</span>
            </a>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      <section id="contact" className="contact">
  <div className="contact-container">
    {/* Left Side: Contact Info */}
    <motion.div 
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="contact-info"
    >
      <span className="badge">Get In Touch</span>
      <h2>Let's build something <br /><span>extraordinary</span> together.</h2>
      <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      
      <div className="info-items">
        <div className="info-item">
          <div className="icon">📧</div>
          <div>
            <h4>Email Me</h4>
            <p>mushtaqmariam0@email.com</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon">📞</div>
          <div>
            <h4>Call Me</h4>
            <p>+92 321 7587549</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon">📍</div>
          <div>
            <h4>Location</h4>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Right Side: Contact Form */}
    <motion.div 
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="contact-card"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <h3>Start a Project</h3>
        <div className="input-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-group">
          <textarea placeholder="Tell me about your vision" rows="4"></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message <span>→</span>
        </button>
      </form>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default Portfolio;