import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xl={3} sm={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        Unity
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        Unreal5
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        Godot
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        SdL
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        OpenGl
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        VueJS
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        LangChain
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        Python
      </Col>
      <Col xl={3} sm={2} className="tech-icons">
        Firebase
      </Col>
    </Row>
  );
}

export default Techstack;
