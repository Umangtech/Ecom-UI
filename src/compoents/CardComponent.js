import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Button,
} from "reactstrap";

const CardComponent = ({product}) => {
  return (
    <div>
      <Card className="text-center">
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{product.title}</CardTitle>
          <CardText>{product.description}</CardText>
          <Container className="text-center">
            <Button color="warning" outline>
              Update
            </Button>
            <Button color="danger" outline>
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};
export default CardComponent;
