import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Giphy",
      description:
        "A vibrant Giphy clone that lets users search, share, and explore a vast library of animated GIFs with seamless functionality!",
      imgUrl: projImg1,
      buttonText1: "Demo",
      buttonLink1: "https://giphyclone-3b952.web.app/",
      buttonText2: "Code",
      buttonLink2: "https://github.com/CodingWithDeven/gipphy-clone",
    },
    {
      title: "GossipGo",
      description:
        "A dynamic MERN stack chat app that enables real-time messaging, user authentication, and seamless conversations",
      imgUrl: projImg2,
      buttonText1: "Demo",
      buttonLink1: "https://mern-chatapp-gossipgo.onrender.com/",
      buttonText2: "Code",
      buttonLink2: "https://github.com/CodingWithDeven/MERN-ChatApp-GossipGo",
    },
    {
      title: "Hirrd",
      description:
        "A sleek React-based job portal that connects job seekers with employers, featuring intuitive search and application functionalities",
      imgUrl: projImg3,
      buttonText1: "Demo",
      buttonLink1: "https://hirrd-job-portal-website.vercel.app/",
      buttonText2: "Code",
      buttonLink2:
        "https://github.com/CodingWithDeven/Hirrd---Job-Portal-Website",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ marginBottom: "30px" }}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
