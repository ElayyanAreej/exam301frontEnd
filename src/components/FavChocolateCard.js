import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";

 class FavChocolateCard extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        show:false
     }
   }
   
  showUpdateFrom =()=>{
this.setState({
  show:true
})

// let updatedDataObj={
//   name:e.ta
// }

//     this.props.updateFromDB(this.props.choclate,updatedDataObj);
  }

  initialUpdateFromDB =(e)=>{
e.preventDefault();
console.log("initialUpdateFromDB");
let updatedDataObj={
  name:e.target.name.value,
  img:e.target.img.value,

}
console.log("updatedDataObj",updatedDataObj);
    this.props.updateFromDB(this.props.choclate,updatedDataObj);


  }
    render() {
        return (
          <>
            <div>
                 <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.choclate.img} />
          <Card.Body>
            <Card.Title>{this.props.choclate.name}</Card.Title>
            <Button variant="primary" onClick={()=>{this.props.deleteFromDB(this.props.choclate)}}>Delete </Button>
            <Button variant="primary" onClick={this.showUpdateFrom}>Update </Button>

          </Card.Body>
        </Card>   
            </div>

            <div>
            {this.state.show &&
              <form onSubmit={this.initialUpdateFromDB}>
                <lable>Update Form     </lable>
                <br/>
                <lable>name </lable>
              <input type="text" name="name" defaultValue={this.props.choclate.name}></input>
          <br/>
              <lable>     img</lable>
              <input type="text" name="img" defaultValue={this.props.choclate.img} ></input>
            <button type="submit">update</button>
              </form>
    }
            </div>
            </>
        )
    }
}

export default FavChocolateCard
