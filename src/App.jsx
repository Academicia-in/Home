function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">
          ACADEMICIA
        </h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <button className="nav-btn">
            Request Demo
          </button>
        </div>

      </nav>
        

      {/* HERO */}
      <section className="hero">

        <div className="hero-overlay">

          <p className="hero-tag">
            Smart Campus Digital Solutions
          </p>

          <h1>
            Transforming Traditional
            <br />
            Institutions into
            <span> Digital Campuses</span>
          </h1>

          <p className="hero-subtext">
            Verification, automation, analytics,
            and institutional transformation —
            all in one ecosystem.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explore Platform
            </button>

            <button className="btn-secondary">
              Book Demo
            </button>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="section" id="about">

        <h2>About Academicia</h2>

        <p className="section-text">
          Academicia helps educational institutions transform traditional
          workflows into intelligent digital ecosystems.
          Our solutions reduce manual work, improve transparency,
          support accreditation processes, and modernize campus operations.
        </p>

      </section>

      {/* SOLUTIONS */}
      <section className="section solutions-bg" id="solutions">

        <h2>Our Solutions</h2>

        <div className="grid">

          <div className="card">
            <div className="icon">📄</div>

            <h3>Document Authentication</h3>

            <p>
              Secure QR-based academic document verification system.
            </p>

            <button
              className="card-btn"
              onClick={() =>
                window.open(
                  "https://academicia-document-auth.onrender.com",
                  "_blank"
                )
              }
            >
              Launch Live Demo
            </button>
          </div>

          <div className="card">
            <div className="icon">📅</div>

            <h3>Digital Attendance</h3>

            <p>
              Smart attendance management with analytics and reporting.
            </p>
          </div>

          <div className="card">
            <div className="icon">📊</div>

            <h3>CO-PO Attainment</h3>

            <p>
              Accreditation-ready attainment analysis platform.
            </p>
          </div>

          <div className="card">
            <div className="icon">👨‍🏫</div>

            <h3>Faculty Analyzer</h3>

            <p>
              Performance tracking and academic evaluation system.
            </p>
          </div>

          <div className="card">
            <div className="icon">📝</div>

            <h3>Exam & Quiz Platform</h3>

            <p>
              Conduct and manage smart digital assessments.
            </p>
          </div>

          <div className="card">
            <div className="icon">🏫</div>

            <h3>Custom ERP Solutions</h3>

            <p>
              Tailored digital infrastructure for institutions.
            </p>
          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="section" id="process">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">1. Consultation</div>
          <div className="step">2. Setup</div>
          <div className="step">3. Deployment</div>
          <div className="step">4. Training</div>
          <div className="step">5. Support</div>

        </div>

      </section>

      {/* WHY US */}
      <section className="section dark-section">

        <h2>Why Institutions Choose Academicia</h2>

        <div className="features-grid">

          <div className="feature-box">
            ✔ Built for Indian Institutions
          </div>

          <div className="feature-box">
            ✔ Accreditation Focused
          </div>

          <div className="feature-box">
            ✔ Secure & Scalable
          </div>

          <div className="feature-box">
            ✔ Reduces Manual Work
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="section" id="contact">

        <h2>Request a Demo</h2>

        <p className="section-text">
          Schedule a free institutional demo and explore how Academicia can
          digitally transform your campus operations.
        </p>

        <div className="contact-form">

          <input placeholder="Your Name" />
          <input placeholder="Institution Name" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />

          <button className="btn-primary full-btn">
            Schedule Demo
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <h3>ACADEMICIA</h3>

        <p>Smart Campus Digital Solutions</p>

        <p>© 2026 Academicia. All rights reserved.</p>

      </footer>

    </div>
  )
}

export default App