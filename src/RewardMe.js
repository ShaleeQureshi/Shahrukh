import React from "react";
import { Container } from "react-bootstrap";
import GITHUB from "./assets/github.png";
import LINKEDIN from "./assets/linkedin.png";

const RewardMe = () => {
  return (
    <div>
      <div className="bg">
        <h1 className="heading center">In Development...</h1>
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
export default RewardMe;
