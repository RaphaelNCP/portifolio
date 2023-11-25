import { Container, Content, Icon, Text } from "./Footer";
import gmail from "../../assets/images/gmail.png";

export const Footer = () => {
  return (
    <Container>
      <Text id="contato">Entre em contato comigo:</Text>
      <Content>
        <a
          href="mailto:raphael.ofc11@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={gmail} alt="Gmail" />
        </a>
        <a
          href="https://www.linkedin.com/in/raphaelncp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
          />
        </a>
        <a
          href="https://github.com/RaphaelNCP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
        </a>
      </Content>
    </Container>
  );
};
