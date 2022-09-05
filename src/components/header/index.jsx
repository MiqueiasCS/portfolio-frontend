import { HeaderContainer } from "./style";
import { Glitch } from "../glitch/style";

export const Header = () => {
  return (
    <HeaderContainer>
      <Glitch />
      <h1>Miqueias Carvalho</h1>
      <h2>Desenvolvedor Front-End</h2>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/miqueias-carvalho-dos-santos/"
          target="_blank"
          rel=" noreferrer noopener"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/MiqueiasCS"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </div>
    </HeaderContainer>
  );
};
