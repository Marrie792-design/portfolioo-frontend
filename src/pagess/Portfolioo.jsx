import React, { useState, useEffect } from 'react';
import './Portfolioo.css';

export default function Portfolioo() {
    const [activeSection, setActiveSection] = useState('hero');
    const [menuOpen, setMenuOpen] = useState(false);
    const [projectFilter, setProjectFilter] = useState('All');

const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState({ success: null, message: '' });
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: '' });

    try {

const response = await fetch('https://portfolioo-backend-beta.vercel.app/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
});
    
        const data = await response.json();

        if (response.ok) {
            setStatus({ success: true, message: 'Message send successfully! 🚀' });
            setFormData({ name: '', email: '', message: '' }); // Clear Form
        } else {
            setStatus({ success: false, message: data.error || 'Something went wrong.' });
        }
    } catch (error) {
        setStatus({ success: false, message: 'Failed to connect to backend server.' });
    } finally {
        setLoading(false);
    }
};
    // Custom Intersection Observer for Scroll Animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15,
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const hiddenElements = document.querySelectorAll('.reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    // const projects = [

    //      {
    //         title: 'Marrie Mart',
    //         category: 'Full-Stack',
    //         tags: ['React', 'Node.js', 'MongoDB', 'Authentication'],
    //         description: 'E-commerce platform equipped with dynamic product catalogs, a structured cart/checkout sequence, and secure authentication.',
    //         demoLink: 'https://marrie-mart-fnlsk8wte-kzarlish792-7686s-projects.vercel.app/',
    //     },

    //     {
    //         title: 'Sugar Bloom',
    //         category: 'Full-Stack',
    //         tags: ['React', 'Express.js', 'Node.js', 'MySQL'],
    //         description: 'A responsive bakery boutique platform incorporating online ordering, interactive menus, and inventory logs.',
    //         demoLink: 'https://sugar-bloom-git-main-kzarlish792-7686s-projects.vercel.app/',
    //     },

    //     {
    //         title: 'Urdu Sign Language Converter',
    //         category: 'Full-Stack',
    //         tags: ['React', 'Python', 'Machine Learning', 'Animations'],
    //         description: 'Converts Pakistani Sign Language (PSL) into real-time Urdu text/voice and vice versa, bridging deaf-hearing communication gaps.',
    //         demoLink: '#',
    //     },
        
    //     {
    //         title: 'JusticeLens',
    //         category: 'AI & Web',
    //         tags: ['React', 'AI Model', 'Express.js', 'Legal Tech'],
    //         description: 'An AI-assisted tool analyzing legal scenarios, rendering structured case summaries, and reducing documentation times.',
    //         demoLink: '#',
    //     },
       
    //     {
    //         title: 'Event Horizon',
    //         category: 'Frontend',
    //         tags: ['React', 'CSS Transitions', 'Event UI'],
    //         description: 'Dynamic platform facilitating event booking, vendor listings, and intuitive ticket generation systems.',
    //         demoLink: 'https://event-horizon-frontend-livid.vercel.app/',
    //     },
    //     {
    //         title: 'TravelGo',
    //         category: 'Frontend',
    //         tags: ['React', 'API Integration', 'UI UX'],
    //         description: 'Polished travel discovery portal with smart dynamic search criteria, comprehensive category filters, and booking options.',
    //         demoLink: 'https://travel-frontend-seven-teal.vercel.app/',
    //     }
    // ];
const projects = [
        {
            title: 'Marrie Mart',
            category: 'Full-Stack',
            tags: ['React', 'Node.js', 'MongoDB', 'Authentication'],
            description: 'An e-commerce platform featuring dynamic product catalogs, secure checkout workflows, and user authentication systems.',
            demoLink: 'https://marrie-mart-fnlsk8wte-kzarlish792-7686s-projects.vercel.app/',
            githubLink: 'https://github.com/yourusername/marrie-mart', // 👈 Apna link dalein
        },
        {
            title: 'Sugar Bloom',
            category: 'Full-Stack',
            tags: ['React', 'Express.js', 'Node.js', 'MySQL', 'Bootstrap'],
            description: 'A responsive bakery boutique platform providing online ordering systems, interactive menus, and inventory tracking.',
            demoLink: 'https://sugar-bloom-git-main-kzarlish792-7686s-projects.vercel.app/',
            githubLink: 'https://github.com/yourusername/sugar-bloom', // 👈 Apna link dalein
        },
        {
            title: 'Urdu Sign Language Converter',
            category: 'Full-Stack',
            tags: ['React', 'Python', 'Machine Learning', 'Animations'],
            description: 'An AI-powered tool converting sign language into real-time Urdu text and speech, bridging communication gaps.',
            demoLink: '#',
            githubLink: '#',
        },
        {
            title: 'JusticeLens',
            category: 'AI & Web',
            tags: ['React', 'AI Model', 'Express.js', 'Legal Tech'],
            description: 'An AI-assisted portal analyzing legal cases, rendering structured legal summaries, and streamlining workflows.',
            demoLink: '#',
            githubLink: '#',
        },
        {
            title: 'Event Horizon',
            category: 'Frontend',
            tags: ['React', 'CSS Transitions', 'Event UI', 'Express.js'],
            description: 'A dynamic dashboard streamlining event bookings, interactive vendor management, and smart ticket generation.',
            demoLink: 'https://event-horizon-frontend-livid.vercel.app/',
            githubLink: 'https://github.com/yourusername/event-horizon', // 👈 Apna link dalein
        },
        {
            title: 'TravelGo',
            category: 'Frontend',
            tags: ['React', 'API Integration', 'UI UX', 'Express.js'],
            description: 'A polished travel discovery portal featuring smart search functionality, dynamic filters, and booking assistance.',
            demoLink: 'https://travel-frontend-seven-teal.vercel.app/',
            githubLink: 'https://github.com/yourusername/travelgo', // 👈 Apna link dalein
        }
    ];

    
    const filteredProjects = projectFilter === 'All'
        ? projects
        : projects.filter(p => p.category === projectFilter);

    return (
        <div className="portfolio-container">

            <div className="video-background">
              
                <video 
  src="https://www.pexels.com/download/video/33691299/" 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="..." 
/>
              
                <div className="video-gradient-overlay"></div>
            </div>
            {/* Visual Background Elements */}
            <div className="grid-overlay"></div>
            <div className="blobblob blob1"></div>
            <div className="blobblob blob2"></div>
            <div className="blobblob blob3"></div>

            {/* Navigation Header */}
            <header className="nav-header">
                <div className="nav-logo">
                    MM<span>.</span>
                </div>
                <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                </button>
                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="hero" className="hero-section reveal">
                <div className="hero-grid">
                    <div className="hero-content">
                        <span className="hero-greeting">👋 Hi, my name is</span>
                        <h1 className="hero-title animate-gradient">Mariam Mushtaq<span>.</span></h1>
                        <h2 className="hero-subtitle">Building Scalable & Seamless Experiences.</h2>
                        <p className="hero-description">
                            Full-Stack JavaScript Developer specializing in high-performance web applications and sleek interfaces. Expert in the React and Node.js ecosystem.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn-primary">Explore My Work</a>
                            <a href="#contact" className="btn-secondary">Let's Connect</a>
                        </div>
                    </div>

                    {/* New Interactive Visual Component (Mock IDE/Terminal window) */}
                    <div className="hero-visual">
                        <div className="code-window">
                            <div className="code-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                                <span className="code-title">developer.js</span>
                            </div>
                            <div className="code-body">
                                <pre>
                                    <code>
                                        <span className="token keyword">const</span> developer <span className="token operator">=</span> <span className="token punctuation">{'{'}</span>
                                        <span className="token property">name</span><span className="token operator">:</span> <span className="token string">'Mariam Mushtaq'</span>,
                                        <span className="token property">role</span><span className="token operator">:</span> <span className="token string">'Full-Stack Developer'</span>,
                                        <span className="token property">techStack</span><span className="token operator">:</span> <span className="token punctuation">[</span>
                                        <span className="token string">'React'</span>, <span className="token string">'Node.js'</span>, <span className="token string">'Express'</span>,
                                        <span className="token string">'MongoDB'</span>, <span className="token string">'MySQL'</span>
                                        <span className="token punctuation">]</span>,
                                        <span className="token property">passion</span><span className="token operator">:</span> <span className="token string">'Optimized & Fluid UIs'</span>,
                                        <span className="token property">loc</span><span className="token operator">:</span> <span className="token string">'Lahore, PK'</span>
                                        <span className="token punctuation">{'}'}</span>;

                                        <span className="token comment">// Continuous integration loop...</span>
                                        <span className="token keyword">while</span> <span className="token punctuation">(</span>learning<span className="token punctuation">)</span> <span className="token punctuation">{'{'}</span>
                                        developer<span className="token punctuation">.</span><span className="token function">build</span><span className="token punctuation">(</span><span className="token string">'Cool Stuff 🚀'</span><span className="token punctuation">)</span>;
                                        <span className="token punctuation">{'}'}</span>
                                    </code>
                                </pre>
                            </div>
                        </div>

                        {/* Floating Tech Badges with separate hover floating animations */}
                        <div className="floating-tag tag-react">React</div>
                        <div className="floating-tag tag-node">Node.js</div>
                        <div className="floating-tag tag-express">Express</div>
                        <div className="floating-tag tag-mongo">MongoDB</div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section reveal">
                <h2 className="section-title">About & Education</h2>
                <div className="about-grid">
                    <div className="about-text-card">
                        <h3>Who I Am</h3>
                        <p>
                            I build highly responsive web experiences, taking your ideas from complex backend logics right up to fluid, stunning interfaces. By optimizing architectures and structuring flawless code, I ensure production systems are fast and completely scalable.
                        </p>
                    </div>
                    <div className="education-card">
                        <h3>Education</h3>
                        <div className="edu-item">
                            <span className="edu-year">2022 - 2026</span>
                            <h4>BS in Computer Science</h4>
                            <p className="edu-inst">Lahore College for Women University</p>
                            <p className="edu-meta">CGPA: 2.89 • Urdu Sign Language Converter Senior Project</p>
                        </div>
                        <div className="edu-item">
                            <span className="edu-year">2019 - 2021</span>
                            <h4>FSc (Pre-Engineering)</h4>
                            <p className="edu-inst">Aspire College, Lahore</p>
                            <p className="edu-meta">Marks: 1003/1100 • Grade: A+</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills-section reveal">
                <h2 className="section-title">My Tech Stack</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <div className="skill-tags">
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Backend Systems</h3>
                        <div className="skill-tags">
                            <span>Node.js</span>
                            <span>Express.js</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Databases & DevOps</h3>
                        <div className="skill-tags">
                            <span>MySQL</span>
                            <span>MongoDB</span>
                            <span>GitHub</span>
                            <span>Postman</span>
                            <span>Gemini AI Tooling</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
<section id="projects" className="projects-section reveal">
    <h2 className="section-title">Selected Works</h2>
    <div className="filter-bar">
        {['All', 'Full-Stack', 'Frontend', 'AI & Web'].map(category => (
            <button
                key={category}
                className={`filter-btn ${projectFilter === category ? 'active' : ''}`}
                onClick={() => setProjectFilter(category)}
            >
                {category}
            </button>
        ))}
    </div>

    <div className="projects-grid">
        {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
                <div className="project-card-glow"></div>
                <div className="project-content">
                    <div className="project-category-tag">{project.category}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-skills">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="skill-badge">{tag}</span>
                        ))}
                    </div>
                    
                    {/* 👇 Updated Links Container */}
                    <div className="project-links">
                        {project.demoLink && project.demoLink !== '#' && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                                Live Demo ↗
                            </a>
                        )}
                        {/* Naya View Code / GitHub Button */}
                        {project.githubLink && project.githubLink !== '#' && (
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-code-link">
                                View Code 📁
                            </a>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>


            {/* Experience Section */}
            <section id="experience" className="experience-section reveal">
                <h2 className="section-title">Professional Path</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">3 Months</span>
                            <h3>Full Stack Developer Intern</h3>
                            <h4>Corvit Networks</h4>
                            <p>Constructed interactive application structures, structured modern API paths, and maintained smooth client dashboard views.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            {/* Contact Section */}
<section id="contact" className="contact-section">
    <h2 className="section-title">Initiate Collaboration</h2>
    <div className="contact-container">
        <div className="contact-info">
            <h3>Let's build something beautiful.</h3>
            <p>I'm always open to talking about potential opportunities, full-stack developments, and code collaborations.</p>
            <ul className="contact-details">
                <li>✉️ marrie9642@gmail.com</li>
                <li>📞 +92 321 7587549</li>
                <li>📍 Lahore, Pakistan</li>
            </ul>
        </div>
        
        {/* Updated Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
            />
            <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
            />
            <textarea 
                name="message"
                placeholder="Tell me about your project..." 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            
            <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success/Error Feedback UI */}
            {status.message && (
                <p style={{ 
                    marginTop: '1rem', 
                    color: status.success ? '#10B981' : '#EF4444',
                    fontWeight: '500',
                    textAlign: 'center' 
                }}>
                    {status.message}
                </p>
            )}
        </form>
    </div>
</section>
            {/* <section id="contact" className="contact-section">
                <h2 className="section-title">Initiate Collaboration</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's build something beautiful.</h3>
                        <p>I'm always open to talking about potential opportunities, full-stack developments, and code collaborations.</p>
                        <ul className="contact-details">
                            <li>✉️ marrie9642@gmail.com</li>
                            <li>📞 +92 321 7587549</li>
                            <li>📍 Lahore, Pakistan</li>
                        </ul>
                    </div>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
                        <button type="submit" className="btn-primary">Transmit Message</button>
                    </form>
                </div>
            </section> */}

            {/* Footer */}
            <footer className="footer-bar">
                <p>© 2026 Mariam Mushtaq | Full Stack Developer</p>
            </footer>
        </div>
    );
}