import { Container, Icon, Link, Option, Options, Title } from "./HeaderStyles";
import Logo from "../../assets/images/icon.png";
export const Header = () => {
  return (
    <Container>
      <Title>
        <Icon src={Logo} alt="Icon" />
        <h1>Raphael do Nascimento</h1>
      </Title>
      <Options>
        <Option>Sobre</Option>
        <Link href="#projetos" rel="noopener noreferrer">
          <Option>Projetos</Option>
        </Link>
        <Link href="#contato" rel="noopener noreferrer">
          <Option>Contato</Option>
        </Link>
      </Options>
    </Container>
  );
};
