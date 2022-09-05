import { Main } from "./styles";
import { ItemContent } from "./items";

export const Projects = () => {
  return (
    <Main>
      <ItemContent
        project={"PCD-Tech"}
        descript={"Veja o repositório do projeto"}
        linkRep={"https://github.com/MiqueiasCS/provihack1"}
      >
        <p className="project-text">
          Trabalho em equipe para o hackton "ProviHack pra Todos" criado para
          facilitar o acesso das empresas as PCDs da área de tecnologia. Nesse
          projeto, fiquei responsável pela criação da página home, pelo
          componente de busca onde era possível pesquisar por nível, cidade ou
          estado e auxiliei na integração com o backend
        </p>

        <a
          href="https://pdctech.vercel.app/"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          Link
        </a>
      </ItemContent>

      <ItemContent
        project={"Jogo da Memória"}
        descript={"Veja o repositório do projeto"}
        linkRep={"https://github.com/MiqueiasCS/jogo_da_memoria"}
        cardPositionRight
      >
        <p className="project-text">
          Projeto de um Jogo da memória criado utilizando html,css e javascript.
          É possível escolher a quantidade de cards através da dificuldade,
          quanto maior a dificuldade, maior o número de cards. Para a criação
          dos cards e animação no caso de vitória foram usados a api Rick and
          Morty API e a lib canvas-confetti respectivamente.
        </p>
        <a
          href={"https://miqueiascs.github.io/jogo_da_memoria/"}
          rel="noopener noreferrer"
          target={"_blank"}
        >
          Link
        </a>
      </ItemContent>

      <ItemContent
        project={"Gerador de senhas"}
        descript={"Veja o repositório do projeto"}
        linkRep={"https://github.com/MiqueiasCS/Gerador-de-senhas"}
      >
        <p className="project-text">
          Gerador de senhas aleatórias de até 25 dígitos (letras maiúsculas e
          minúsculas, números e caracteres especiais). Nesse projeto foi usado
          javascript, html e css.
        </p>
        <a
          href="https://miqueiascs.github.io/Gerador-de-senhas/"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          Link
        </a>
      </ItemContent>
    </Main>
  );
};
