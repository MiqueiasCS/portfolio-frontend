import styled, { keyframes } from "styled-components";

const backgroundTransition = keyframes`  
  0% {
    background-position: 0% 80%;
  }
  50% {
    background-position: 80% 100%;
  }
  100% {
    background-position: 0% 90%;
  }
`;

export const HeaderContainer = styled.header`
  color: #ffffff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //background: linear-gradient(45deg, #090a10, #161b24);
  background: linear-gradient(-45deg, #050404, #161b24, #264f7c, #616369);
  background-size: 400% 400%;

  animation: ${backgroundTransition} 10s ease-in-out infinite;

  h1,
  h2 {
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 16px 0;
  }

  .social-media {
    margin-top: 1rem;
    display: flex;
  }

  .social-media a {
    text-decoration: none;
    color: #ffffff;
    font-size: 24px;
    padding: 1rem 4rem;
    border: 1px solid #ffffff;
    min-width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s cubic-bezier(0.55, 0.025, 0.675, 0.97);
  }

  a:hover {
    color: #2e1c2b;
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    .social-media {
      flex-direction: column;
    }
  }
`;
