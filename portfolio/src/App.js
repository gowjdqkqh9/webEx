import { SectionsContainer, Section } from "react-fullpage";

import Header from "./components/main/Header";
import Main from "./components/main/Main";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import Skill from "./components/main/Skill";
import Contact from "./components/main/Contact";

import "./assets/style/reset.css";
import "./components/style/index.scss";
import "./assets/style/font.css";

function App() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFore", "sectionFive"],
  };

  return (
    <>
      <Header />
      <SectionsContainer {...options}>
        <Section>
          <Main />
        </Section>

        <Section>
          <About />
        </Section>

        <Section>
          <Projects />
        </Section>

        <Section>
          <Skill />
        </Section>

        <Section>
          <Contact />
        </Section>
      </SectionsContainer>
    </>
  );
}

export default App;
