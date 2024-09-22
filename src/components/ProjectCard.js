import { Col, Button } from "react-bootstrap";
import "./ProjectCard.css";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-group">
            <Button
              href={buttonLink1}
              className="custom-button me-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText1}
            </Button>
            <Button
              href={buttonLink2}
              className="custom-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText2}
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
