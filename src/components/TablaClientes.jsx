import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const CardExampleGroups = () => {
  return (
    <div className="content-table">
      <Card.Group>
        <h1>Clientes</h1>
        <Card>
          <Card.Content>
            <Card.Header>Steve Sanders</Card.Header>
            <Card.Meta>018-0052980-0</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group best friends
            </Card.Description>
            <Card.Description>
              <strong>125,500.00</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Editar
              </Button>
              <Button basic color="red">
                Eliminar
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>123-4567899-1</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group musicians
            </Card.Description>
            <Card.Description>
              <strong>125,500.00</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Editar
              </Button>
              <Button basic color="red">
                Eliminar
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Jenny Lawrence</Card.Header>
            <Card.Meta>123-4567899-1</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
            <Card.Description>
              <strong>125,500.00</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Editar
              </Button>
              <Button basic color="red">
                Eliminar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};
export default CardExampleGroups;
