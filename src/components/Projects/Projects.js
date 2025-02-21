import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SB from "../../Assets/Projects/SpaceBars.png";
import ren from "../../Assets/Projects/Ren.png";
import Diab from "../../Assets/Projects/Diab.png";
import MNSN from "../../Assets/Projects/MNSN.png";
import input from "../../Assets/Projects/input.jpg";
import snake from "../../Assets/Projects/Snake.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MNSN}
              isBlog={false}
              title="Midnight Summer Ninja"
              description="An 8-bit arcade style action game where you control time and move with speed and reflexes to beat an unlimited wave of enemies to reach the highest score on the leaderboard!"
              demoLink="https://mybrainchildren.itch.io/midnight-summer-ninja"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Wireless Snake Game"
              description="Modified an arduino based snake game to take wireless input directly from phone, using ESP8266 and UDP packets."
              ghLink="https://github.com/Defalt-here/short_eletronics"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SB}
              isBlog={false}
              title="Space Bars"
              description="2D Space shooter written entirely in C++ and SdL without the use of any game engines. pew pew"
              ghLink="https://github.com/Defalt-here/Space-Bars"         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ren}
              isBlog={false}
              title="Render Pipeline Visualiser"
              description="Made a pipeline visualiser that demonstrates every step of the rendering pipeline in computer graphics using OpenGL."
              ghLink="https://github.com/Defalt-here/Render-Pipeline-Visualiser"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={input}
              isBlog={false}
              title="Input Systems"
              description="Using C++ made an input system that achieves modern game engine level abstraction."
              ghLink="https://github.com/Defalt-here/Input-Systems"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Diab}
              isBlog={false}
              title="Diabolical"
              description="Made a game that runs directly in console. Text based thriller that leads you through puzzles and mazes to uncover a plot"
              ghLink="https://github.com/Defalt-here/Diabolical-Game"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
