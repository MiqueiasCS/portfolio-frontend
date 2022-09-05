import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  margin-top: 3rem;

  .repo-link {
    text-decoration: none;
  }

  .project-details {
    display: flex;
    flex-direction: column;
    width: 40%;
  }

  .project-details .project-text {
    font-family: sans-serif;
    letter-spacing: 1px;
    color: rgb(109, 109, 109);
  }

  .project-details a {
    letter-spacing: 2px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.cardRight ? "column-reverse" : "column"};

    .project-details {
      width: 90%;
    }
    .project-details .project-text {
      text-align: center;
      padding: 12px;
      margin-top: 16px;
    }

    .project-details a {
      text-align: center;
    }
  }
`;
