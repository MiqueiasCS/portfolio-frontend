import { Card } from "../card";
import { ItemContainer } from "./styles";

export const ItemContent = ({
  project,
  descript,
  linkRep,
  children,
  cardPositionRight = false,
}) => {
  return (
    <ItemContainer cardRight={cardPositionRight}>
      {cardPositionRight ? (
        <>
          <div className="project-details">{children}</div>

          <a
            className="repo-link"
            href={linkRep}
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Card project={project} descript={descript} />
          </a>
        </>
      ) : (
        <>
          <a
            className="repo-link"
            href={linkRep}
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <Card project={project} descript={descript} />
          </a>
          <div className="project-details">{children}</div>
        </>
      )}
    </ItemContainer>
  );
};
