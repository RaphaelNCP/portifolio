import {
  Button,
  Container,
  Content,
  Image,
  Text,
  TextContainer,
  Title,
} from "./ShowCase";

export const ShowCase = ({
  title,
  foto,
  description,
  githubLink,
  type,
}: {
  title: string;
  foto: string;
  description: string;
  githubLink: string;
  type: number;
}) => {
  const tipo = type;

  return (
    <Container>
      <Title>{title}</Title>
      {tipo === 1 ? (
        <Content>
          <Image src={foto} alt="Tela de login" />
          <TextContainer>
            <Text>{description}</Text>
            <Button onClick={() => window.open(githubLink, "_blank")}>
              Ver projeto no GitHub
            </Button>
          </TextContainer>
        </Content>
      ) : (
        <Content>
          <TextContainer>
            <Text>{description}</Text>
            <Button onClick={() => window.open(githubLink, "_blank")}>
              Ver projeto no GitHub
            </Button>
          </TextContainer>
          <Image src={foto} alt="Tela de login" />
        </Content>
      )}
    </Container>
  );
};
