import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-container">

          <div className="services-label">
            OUR SERVICES
          </div>

          <h1>
            Assignment
            <br />
            <span>Solution</span>
          </h1>

          <p>
            Online essay and report writing services designed
            to support students with a wide range of academic
            requirements.
          </p>

          <div className="services-hero-buttons">

            <Link
              to="/contact"
              className="services-contact-link"
            >
              CONTACT US →
            </Link>

          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="services-intro">

        <div className="services-container">

          <div className="services-intro-grid">

            <div className="services-side-label">
              <span>•</span>
              <p>
                WHAT WE
                <br />
                OFFER
              </p>
            </div>

            <div className="services-intro-content">

              <h2>
                Online Essay and
                <br />
                <em>Report Writing Service</em>
              </h2>

              <p>
                At <strong>Scholars Assignment Mate</strong>, we offer a
                wide range of assignment writing services to our
                customers worldwide. We assist students in all types
                of academic needs.
              </p>

              <p>
                Our range of services includes assignment writing,
                essay writing, report writing, reflective journals,
                law papers, finance reports, college papers, marketing,
                ratio analysis, term paper help, PESTLE analysis and
                urgent assignments.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}
      <section
        className="services-section"
        id="services"
      >

        <div className="services-container">

          <div className="services-heading">

            <span>
              ASSIGNMENT WRITING SERVICES
            </span>

            <h2>
              Academic support,
              <br />
              <em>structured around your needs.</em>
            </h2>

            <p>
              We have a state of art assignment writing service
              facility. Our services cover a broad range of
              academic requirements.
            </p>

          </div>


          <div className="services-layout">

            {/* LEFT SERVICE MENU */}
{/* 
            <nav className="services-menu">

              <a href="#assignment-writing">
                <span>•</span>
                Assignment Writing
              </a>

              <a href="#essay-writing">
                <span>•</span>
                Essay Writing
              </a>

              <a href="#report-writing">
                <span>•</span>
                Report Writing
              </a>

              <a href="#reflective-journal">
                <span>•</span>
                Reflective Journal
              </a>

              <a href="#law-papers">
                <span>•</span>
                Law Papers
              </a>

              <a href="#finance-reports">
                <span>•</span>
                Finance Reports
              </a>

              <a href="#college-papers">
                <span>•</span>
                College Papers
              </a>

              <a href="#marketing">
                <span>•</span>
                Marketing
              </a>

              <a href="#ratio-analysis">
                <span>•</span>
                Ratio Analysis
              </a>

              <a href="#term-paper-help">
                <span>•</span>
                Term Paper Help
              </a>

              <a href="#pestle-analysis">
                <span>•</span>
                PESTLE Analysis
              </a>

              <a href="#urgent-assignments">
                <span>•</span>
                Urgent Assignments
              </a>

            </nav>
 */}

            {/* RIGHT CONTENT */}

            <div className="services-content">


              {/* Assignment Writing */}

              <article
                className="service-item"
                id="assignment-writing"
              >

                <h3>
                  Assignment Writing
                </h3>

                <p>
                  We provide professional assignment writing support
                  for different academic subjects and requirements.
                  Our approach focuses on understanding the assignment
                  brief, structuring the content appropriately and
                  presenting the information in a clear and organised
                  manner.
                </p>

              </article>

              

              {/* Essay Writing */}

              <article
                className="service-item"
                id="essay-writing"
              >

                <h3>
                  Essay Writing
                </h3>

                <p>
                  We provide best essay writing service worldwide.
                  Essay writing requires good writing skills as the
                  marking depends solely on the depth in the paper.
                </p>

                <p>
                  In essay writing service, it is mandatory to write
                  the paper in paragraph format without many headings
                  (if any) and without the use of bullet points. We
                  cater to all subjects including Nursing, Marketing, HRM,
                  Business, Management, Performance Management,
                  Nutrition, Law, Finance, Management Accounting,
                  Operation Management and many others.
                </p>

              </article>

              {/* Report Writing */}

              <article
                className="service-item"
                id="report-writing"
              >

                <h3>
                  Report Writing
                </h3>

                <p>
                  We understand the difference between report writing
                  service and essay writing service. Both the services
                  are completely different in the way the desired
                  result is approached.
                </p>

                <p>
                  Report writing requires us to write the paper in a
                  way that the readers can get a bird eye view of the
                  entire content of the paper. This makes it important
                  for us to make the paper in a well structured way
                  with good use of diagrams, bullet points as well as
                  paragraphs.
                </p>

                <p>
                  The table of content needs to be well structured and
                  the paper should be followed with detailed appendix.
                </p>

              </article>


              {/* Reflective Journal */}

              <article
                className="service-item"
                id="reflective-journal"
              >

                <h3>
                  Reflective Journal
                </h3>

                <p>
                  Reflective journals require students to explain
                  their experiences, learning and personal development
                  in a structured academic format.
                </p>

                <p>
                  We provide support with organising ideas, presenting
                  reflections clearly and maintaining an appropriate
                  academic structure according to the requirements of
                  the assignment.
                </p>

              </article>
              
               {/* Nursing Writing */}

              <article
                className="service-item"
                id="nursing-assignment"
              >

                <h3>
                  Nursing Assignment
                </h3>

                <p>
                 We provide professional nursing assignment writing support for students 
                 worldwide. Nursing assignments require strong academic writing skills
                  along with a clear understanding of healthcare concepts, clinical 
                  practices and evidence-based approaches.
                </p>

                <p>
                 In nursing assignment writing, it is important to present the information
                  in a clear and well-structured manner while supporting the discussion
                   with relevant academic sources. We assist with various nursing topics 
                   including Adult Nursing, Mental Health Nursing, Child Nursing, Community
                    Nursing, Public Health, Healthcare Management, Nursing Leadership,
                     Clinical Practice and many others.
                </p>

              </article>





              {/* Law Papers */}

              <article
                className="service-item"
                id="law-papers"
              >

                <h3>
                  Law Papers
                </h3>

                <p>
                  Law assignments require detailed understanding,
                  research and structured arguments. We provide support
                  for different types of law papers, focusing on clear
                  presentation of legal concepts, analysis and relevant
                  arguments.
                </p>

              </article>


              {/* Finance Reports */}

              <article
                className="service-item"
                id="finance-reports"
              >

                <h3>
                  Finance Reports
                </h3>

                <p>
                  Finance and accounting assignments often require
                  detailed calculations, analysis and interpretation
                  of financial information.
                </p>

                <p>
                  We provide support for finance reports, management
                  accounting assignments and other finance-related
                  academic requirements with an emphasis on clear
                  presentation and structured analysis.
                </p>

              </article>


              {/* College Papers */}

              <article
                className="service-item"
                id="college-papers"
              >

                <h3>
                  College Papers
                </h3>

                <p>
                  We provide academic writing support for college
                  students across different subjects and academic
                  requirements.
                </p>

                <p>
                  Whether it is an essay, assignment, report, case
                  study or other academic paper, our focus is on
                  understanding the requirements and presenting the
                  work in a clear and structured manner.
                </p>

              </article>


              {/* Marketing */}

              <article
                className="service-item"
                id="marketing"
              >

                <h3>
                  Marketing
                </h3>

                <p>
                  Marketing assignments can involve topics such as
                  marketing strategy, consumer behaviour, market
                  analysis, digital marketing, branding and business
                  strategy.
                </p>

                <p>
                  We provide support with different types of marketing
                  assignments and academic requirements.
                </p>

              </article>


              {/* Ratio Analysis */}

              <article
                className="service-item"
                id="ratio-analysis"
              >

                <h3>
                  Ratio Analysis
                </h3>

                <p>
                  Ratio analysis is an important part of financial and
                  accounting assignments. It involves analysing
                  financial information and interpreting different
                  financial ratios.
                </p>

                <p>
                  We provide support with ratio analysis assignments
                  and reports, including the presentation and
                  interpretation of financial information.
                </p>

              </article>


              {/* Term Paper Help */}

              <article
                className="service-item"
                id="term-paper-help"
              >

                <h3>
                  Term Paper Help
                </h3>

                <p>
                  Term papers require proper research, organisation
                  and academic presentation. We provide support with
                  term papers across different subjects and academic
                  disciplines.
                </p>

                <p>
                  Our approach focuses on understanding the topic,
                  organising the content logically and presenting the
                  research in an appropriate academic format.
                </p>

              </article>


              {/* PESTLE Analysis */}

              <article
                className="service-item"
                id="pestle-analysis"
              >

                <h3>
                  PESTLE Analysis
                </h3>

                <p>
                  PESTLE analysis helps evaluate external factors that
                  can influence an organisation or business.
                </p>

                <p>
                  We provide support with PESTLE analysis covering
                  Political, Economic, Social, Technological, Legal
                  and Environmental factors and their potential impact
                  on the organisation or selected business environment.
                </p>

              </article>


              {/* Urgent Assignments */}

              <article
                className="service-item"
                id="urgent-assignments"
              >

                <h3>
                  Urgent Assignments
                </h3>

                <p>
                  We understand that sometimes students have tight
                  deadlines and require academic support at short
                  notice.
                </p>

                <p>
                  Our team can assist with urgent assignment
                  requirements depending on the complexity, word count
                  and available deadline.
                </p>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="services-cta">

        <div className="services-container">

          <div className="services-cta-inner">

            <div>

              <span>
                NEED ACADEMIC SUPPORT?
              </span>

              <h2>
                Tell us what
                <br />
                <em>you need.</em>
              </h2>

            </div>

            <Link
              to="/order-form"
              className="services-cta-btn"
            >
              START YOUR ORDER
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;