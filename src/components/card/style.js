import styled from "styled-components";
import card_bg_image from "../../assets/room.jpg";

export const CardContainer = styled.div`
  height: 300px;
  width: 400px;
  background-image: url(${card_bg_image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0.5);
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;

  .card-wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .card-wrapper h2 {
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 4px;
    transition: 0.3s;
  }

  .card-wrapper p {
    font-size: 0;
    visibility: hidden;
    opacity: 0;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.3s;
  }

  .card-wrapper::before {
    content: "";
    position: absolute;
    height: 100px;
    width: 100px;
    display: block;
    border: 1px solid #ffffff;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    filter: unset;

    > .card-wrapper::before {
      opacity: 1;
      width: 350px;
      height: 250px;
    }

    > .card-wrapper p {
      font-size: 24px;
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
`;
