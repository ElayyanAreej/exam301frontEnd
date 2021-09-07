import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class ChocolateCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.choclate.img} />
          <Card.Body>
            <Card.Title>{this.props.choclate.name}</Card.Title>
            <Button variant="primary" onClick={()=>{this.props.addToFav(this.props.choclate)}}>Add </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ChocolateCard;
