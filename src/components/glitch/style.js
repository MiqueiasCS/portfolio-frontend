import styled, { keyframes } from "styled-components";
import foto from "../../assets/fotos/foto-2.png";
import firstImage from "../../assets/fotos/image-1.png";
import secondImage from "../../assets/fotos/image-2.png";
import thirdImage from "../../assets/fotos/image-3.png";

const glitch = keyframes`
0%, 100%{
    background: url(${foto});
    background-size: cover;
}
92.5%{
    background: url(${firstImage});
    background-size: cover;
    opacity: 1;
}
95%{
    background: url(${secondImage});
    background-size: cover;
    opacity: 0;
}
97.5%{
    background: url(${thirdImage});
    background-size: cover;
    opacity: 1;
}
`;

export const Glitch = styled.div`
  width: 300px;
  height: 340px;
  background: url(${foto});
  background-size: cover;
  animation: ${glitch} 3.5s infinite steps(1);
`;
