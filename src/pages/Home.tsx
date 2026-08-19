import "./Home.css";

const services = [
  {
    number: "01",
    title: "Assignment Help",
    text: "Professional academic support for assignments across a wide range of subjects.",
  },
  {
    number: "02",
    title: "Dissertation Help",
    text: "Support with dissertation planning, research, structure, writing and presentation.",
  },
  {
    number: "03",
    title: "Essay Writing",
    text: "Well-structured and research-based essays prepared according to your requirements.",
  },
  {
    number: "04",
    title: "Report Writing",
    text: "Clear and professionally structured academic and business reports.",
  },
  {
    number: "05",
    title: "Case Study",
    text: "Detailed case study research, analysis and academic presentation.",
  },
  {
    number: "06",
    title: "PhD Thesis",
    text: "Research-focused academic support for advanced-level thesis requirements.",
  },
];

const benefits = [
  {
    number: "01",
    title: "17+ Years Experience",
    text: "Extensive experience in providing academic support.",
  },
  {
    number: "02",
    title: "Quality Work",
    text: "Research-focused work prepared according to your requirements.",
  },
  {
    number: "03",
    title: "Timely Delivery",
    text: "We understand the importance of academic deadlines.",
  },
  {
    number: "04",
    title: "Professional Writers",
    text: "Experienced writers with knowledge across multiple subject areas.",
  },
];

const testimonials = [
  {
    name: "Pandziun",
    text: "The best service I could ask for. Everything is discussed clearly with the smallest details. Friendly service, always answers questions and never delays answer.",
  },
  {
    name: "Daniela Vames",
    text: "Very receptive and communicative team. The work was great and detailed.",
  },
  {
    name: "Johnathan Patoun",
    text: "Communication was great from start to finish. The essay was delivered on time and to a very high standard.",
  },
];

function Home() {
  return (
    <main className="home-page">

      {/* ================================
          HERO
      ================================= */}

      <section className="hero">

        <div className="hero-inner">

          <div className="hero-content">

            <div className="hero-label">
              PROFESSIONAL ACADEMIC SUPPORT
            </div>

            <h1>
              Academic Support
              <br />
              <span>You Can Rely On.</span>
            </h1>

            <p>
              Professional support for assignments, dissertations,
              essays, reports and research requirements.
              We work around your requirements, deadline and
              academic brief.
            </p>

            <div className="hero-buttons">

              {/* <a
                href="/order-form"
                className="btn-primary"
              >
                GET A QUOTE
                <span>→</span>
              </a> */}

              <a
                href="/services"
                className="btn-outline"
              >
                VIEW SERVICES
                <span>→</span>
              </a>

            </div>

          </div>


          {/* Hero Information Card */}

          <div className="hero-panel">

            <div className="hero-panel-top">
              <span>Scholars Assignment Mate</span>

              <strong>01</strong>
            </div>

            <div className="hero-experience">

              <strong>17+</strong>

              <div>
                <span>YEARS OF</span>
                <span>EXPERIENCE</span>
              </div>

            </div>

            <div className="hero-line" />

            <div className="hero-points">

              <div>
                <span>✓</span>
                Quality academic support
              </div>

              <div>
                <span>✓</span>
                Professional writers
              </div>

              <div>
                <span>✓</span>
                Timely delivery
              </div>

              <div>
                <span>✓</span>
                24/7 customer support
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          TRUST BAR
      ================================= */}

      <section className="trust-bar">

        <div className="trust-inner">

          {benefits.map((benefit) => (

            <div
              className="trust-item"
              key={benefit.number}
            >

              <strong>
                {benefit.number}
              </strong>

              <div>
                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================================
          INTRODUCTION
      ================================= */}

      <section className="introduction">

        <div className="content-container intro-grid">

          <div className="section-title">

            <span>
              ABOUT US
            </span>

            <h2>
              Academic support
              <br />
              <em>built around you.</em>
            </h2>

          </div>

          <div className="intro-text">

            <p>
              Welcome to Scholars Assignment Mate — your one-stop
              solution for assignment and dissertation writing
              requirements.
            </p>

            <p>
              With over 17 years of experience, we provide
              professional academic support tailored to your
              requirements. Our aim is to make the academic
              process clearer, more manageable and less stressful.
            </p>

            <a
              href="/about"
              className="simple-link"
            >
              MORE ABOUT US
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* ================================
          SERVICES
      ================================= */}

      <section className="services">

        <div className="content-container">

          <div className="section-heading">

            <div>

              <span>
                WHAT WE OFFER
              </span>

              <h2>
                Our Academic Services
              </h2>

            </div>

            <p>
              Professional academic support across different
              types of assignments and research requirements.
            </p>

          </div>


          <div className="service-grid">

            {services.map((service) => (

              <a
                href="/services"
                className="service-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <span className="service-arrow">
                    →
                  </span>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* ================================
          HOW IT WORKS
      ================================= */}

      <section className="process">

        <div className="content-container">

          <div className="center-heading">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              How It Works
            </h2>

            <p>
              Getting academic support doesn't need to be complicated.
            </p>

          </div>


          <div className="process-grid">

            <div className="process-item">

              <div className="process-number">
                01
              </div>

              <h3>
                Submit Your Requirement
              </h3>

              <p>
                Share your assignment details,
                requirements and deadline.
              </p>

            </div>


            <div className="process-item">

              <div className="process-number">
                02
              </div>

              <h3>
                Discuss Your Requirement
              </h3>

              <p>
                Our team reviews your requirement
                and discusses the next steps.
              </p>

            </div>


            <div className="process-item">

              <div className="process-number">
                03
              </div>

              <h3>
                Work Begins
              </h3>

              <p>
                The assigned writer works according
                to your academic brief.
              </p>

            </div>


            <div className="process-item">

              <div className="process-number">
                04
              </div>

              <h3>
                Receive Your Work
              </h3>

              <p>
                Your completed work is delivered
                according to the agreed deadline.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          TESTIMONIALS
      ================================= */}

      <section className="testimonials">

        <div className="content-container">

          <div className="center-heading">

            <span>
              CLIENT FEEDBACK
            </span>

            <h2>
              What Our Clients Say
            </h2>

          </div>


          <div className="testimonial-grid">

            {testimonials.map((testimonial) => (

              <article
                className="testimonial-card"
                key={testimonial.name}
              >

                <div className="stars">
                  ★★★★★
                </div>

                <p>
                  "{testimonial.text}"
                </p>

                <div className="client">

                  <div className="client-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      Client
                    </span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================================
          FINAL CTA
      ================================= */}

      <section className="final-cta">

        <div className="content-container">

          <div>

            <span>
              READY TO GET STARTED?
            </span>

            <h2>
              Have an assignment?
              <br />
              Let's discuss it.
            </h2>

          </div>

          <div className="cta-actions">
{/* 
            <a
              href="/order-form"
              className="cta-button"
            >
              START YOUR ORDER
              <span>→</span>
            </a> */}

            <a
              href="/contact"
              className="cta-contact"
            >
              CONTACT US
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;