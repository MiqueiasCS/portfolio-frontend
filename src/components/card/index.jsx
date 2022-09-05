import { CardContainer } from "./style";

export const Card = ({ project, descript }) => {
  return (
    <CardContainer>
      <div className="card-wrapper">
        <h2>{project}</h2>
        <p>{descript}</p>
      </div>
    </CardContainer>
  );
};
