import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import PICTURE from "./assets/me2.jpeg";
import GITHUB from "./assets/github.png";
import LINKEDIN from "./assets/linkedin.png";
import INTACT from "./assets/intact.png";
import P_AND_G from "./assets/Procter_&_Gamble_logo.svg.png";
import TANGERINE from "./assets/tangerine.jpeg";
import OD1N from "./assets/od1n.jpeg";
import AMELIA from "./assets/amelia.jpeg";
import NOKIA from "./assets/nokia_logo.jpeg";
import AUTODESK from "./assets/autodesk_logo.jpeg";
import { Chrono } from "react-chrono";

const Home = () => {
  const items = [
    {
      title: <Image src={AUTODESK} style={{ maxWidth: 50 }} />,
      cardSubtitle: "Jan 2026 - Aug 2026",
      cardTitle: "Autodesk",
      cardDetailedText: "Full Stack Software Engineer Intern",
    },
    {
      title: <Image src={NOKIA} style={{ maxWidth: 50 }} />,
      cardSubtitle: "Sept 2025 - Dec 2025",
      cardTitle: "Nokia",
      cardDetailedText: "Full Stack Software Engineer Cloud AI/ML Intern",
    },
    {
      title: <Image src={INTACT} style={{ maxWidth: 50 }} />,
      cardSubtitle: "Jan 2025 - Apr 2025",
      cardTitle: "Intact Financial Corporation",
      cardDetailedText: "Cyber Security Analyst Intern",
    },
    {
      title: <Image src={P_AND_G} style={{ maxWidth: 50 }} />,
      cardSubtitle: "May 2023 - May 2024",
      cardTitle: "Procter & Gamble",
      cardDetailedText: "Software Engineer Intern",
    },
    {
      title: <Image src={TANGERINE} style={{ maxWidth: 50 }} />,

      cardSubtitle: "Jan 2023 - May 2023",
      cardTitle: "Tangerine (Scotiabank)",
      cardDetailedText: "DevOps Specialist Intern",
    },
    {
      title: <Image src={OD1N} style={{ maxWidth: 50 }} />,

      cardSubtitle: "Aug 2022 - Sept 2022",
      cardTitle: "OD1N Health",
      cardDetailedText: "SWE Intern (Web/Mobile)",
    },
    {
      title: <Image src={AMELIA} style={{ maxWidth: 50 }} />,

      cardSubtitle: "Jun 2022 - Sept 2022",
      cardTitle: "Amelia",
      cardDetailedText: "SWE Intern (Mobile)",
    },
  ];
  return (
    <div>
      <div className="bg">
        <Container className="pt-5">
          <Row id="landing" className="text-center">
            <Col className="mb-3" id="landing-left">
              <h1 id="heading">👋 Hi nice to meet you - I'm Shahrukh</h1>
              <h3 id="subheading">I like to code sometimes</h3>
              <a
                href="https://github.com/ShaleeQureshi"
                target="_blank"
                rel="noopener noreferrer">
                <Image src={GITHUB} id="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/qureshishahrukh/"
                target="_blank"
                rel="noopener noreferrer">
                <Image src={LINKEDIN} id="icons" />
              </a>
            </Col>
            <Col>
              <Image src={PICTURE} roundedCircle id="me-img" />
            </Col>
          </Row>
          <div className="mt-5 text-padding" id="intro">
            <h4>
              I'm a Double Degree student studying Computer Science at the
              University of Waterloo and Business Administration at Wilfrid
              Laurier University in Waterloo, ON, Canada.
              <br /> <br />
              Open to Internships / FT
            </h4>
          </div>
          <div>
            <h4 className="text-padding">Previously, I worked at...</h4>
            <Chrono
              items={items}
              mode="VERTICAL_ALTERNATING"
              showAllCardsHorizontal
              enableOutline
              disableToolbar
              scrollable
              highlightCardsOnHover
              enableBreakPoint
              responsiveBreakPoint
              cardHeight={100}
              cardWidth={200}
              itemWidth={200}
              theme={{
                secondary: "transparent",
              }}
            />
          </div>
          <div className="mt-5 text-padding">
            <h4>
              From running{" "}
              <a
                id="text-a"
                href="https://shaleequreshi.github.io/NorthHacks/#/"
                target="_blank"
                rel="noopener noreferrer">
                NorthHacks
              </a>{" "}
              in grade 12, an online hackathon platform I created during Covid,
              to creating a website for students to make informed course
              selection decisions with{" "}
              <a
                id="text-a"
                href="https://laurierflow.ca/"
                target="_blank"
                rel="noopener noreferrer">
                LaurierFlow
              </a>
              , I'm always looking to tackle interesting challenges.
            </h4>
            <h4>In my freetime you can find me</h4>
            <ul>
              <li>🏋️ At the gym</li>
              <li>📖 Reading about history</li>
              <li>👨‍💻 Building my own business</li>
              <li>📚 Completing cerficiations</li>
              <li>📈 Pretending to understand stocks</li>
            </ul>
          </div>
          <div className="text-center">
            <Button
              className="w-50 mt-3 text-center"
              id="btnText"
              variant="outline-dark"
              href="mailto:shaleequreshi2019@gmail.com">
              Send me an email
            </Button>
          </div>
        </Container>
      </div>
      <Container fluid className="text-center footer">
        <div className="pt-5 pb-3 text-center">
          <a
            href="https://www.linkedin.com/in/qureshishahrukh/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={LINKEDIN} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/ShaleeQureshi"
            target="_blank"
            rel="noopener noreferrer">
            <img src={GITHUB} alt="LinkedIn" />
          </a>
          <hr id="underline" />
          <p>© 2025 - Shahrukh Qureshi</p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
