import { Header } from "../../components/Header";
import {
  About,
  Container,
  Content,
  Icons,
  Linha,
  Profile,
  Title,
  Tools,
  ToolsTitle,
} from "./HomePageStyles";
import profile from "../../assets/images/personal-image.png";
import loginScreen from "../../assets/images/app-cadastro.svg";
import ecommerce from "../../assets/images/ecommerce.svg";
import coinConverter from "../../assets/images/coin-conver.svg";
import { ShowCase } from "../../components/ShowCase";
import { Footer } from "../../components/Footer";
import finapp from "../../assets/images/finapp.svg";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Content>
          <div>
            <Title>
              Desenvolvedor Front-End
              <br /> e Mobile
            </Title>
            <About>
              Olá, me chamo <strong>Raphael</strong> e sou desenvolvedor
              front-end e mobile. Atualmente estou cursando Ciências da
              Computação na Universidade Fumec. Tenho conhecimento em HTML, CSS,
              TypeScript, ReactJS, React Native, NodeJS e Kotlin. Estou sempre
              em busca de novos conhecimentos e experiências para me tornar um
              desenvolvedor melhor e agregar por onde passar.
            </About>
            <Tools>
              <ToolsTitle>Principais Tecnologias:</ToolsTitle>
              <Icons>
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="typescript"
                />
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="react"
                />
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="NodeJS"
                />
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="NextJS"
                />
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt="flutter"
                />
                <img
                  width="35px"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                  alt="kotlin"
                />
              </Icons>
            </Tools>
          </div>
          <Profile src={profile} alt="Foto pessoal" />
        </Content>
        <Title id="projetos">Projetos</Title>
        <ShowCase
          title="Tela de cadastro e login"
          foto={loginScreen}
          description="O aplicativo trata-se de uma tela de cadastro e login, onde o usuario pode não so realizar seu cadastro e login com feedbacks respetivos, mas tambem escolher por uma opção de 'esqueci a senha'. O desenvolvimento foi realizado com Kotlin, através do Android Studio e é nativo para o sistemas android."
          githubLink="https://github.com/RaphaelNCP/Login_Screen_Kotlin"
          type={1}
        />
        <Linha />
        <ShowCase
          title="Template de e-commerce"
          foto={ecommerce}
          description="O aplicativo trata-se de um template de e-commerce, onde o usuario pode navegar entre as categorias e adicionar produtos ao carrinho, e as lojas podem exibir seus produtos e organizá-los. O desenvolvimento foi realizado com React Native e é uma aplicação híbrida."
          githubLink="https://github.com/RaphaelNCP/E-commerce-ReactNative"
          type={2}
        />
        <Linha />
        <ShowCase
          title="Aplicatico de gestõo de finanças"
          foto={finapp}
          description="O aplicativo trata-se de um conversor de moedas, onde o usuario pode fazer conversões entre todos os tipos de moedas, até mesmo cripto-moedas. O desenvolvimento foi realizado com Kotlin, através do Android Studio e é nativo para o sistemas android"
          githubLink="https://github.com/RaphaelNCP/app_conversor_de_moedas"
          type={1}
        />
        <Linha />
        <ShowCase
          title="Conversor de moedas"
          foto={coinConverter}
          description="O aplicativo trata-se de um conversor de moedas, onde o usuario pode fazer conversões entre todos os tipos de moedas, até mesmo cripto-moedas. O desenvolvimento foi realizado com Kotlin, através do Android Studio e é nativo para o sistemas android"
          githubLink="https://github.com/RaphaelNCP/app_conversor_de_moedas"
          type={2}
        />
      </Container>
      <Footer />
    </div>
  );
};
