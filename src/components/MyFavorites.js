import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import FavChocolateCard from './FavChocolateCard'

class MyFavorites extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       dbData:[],
    }
  }
  
  async componentDidMount() {
    console.log("getFromDB");
    let { user } = this.props.auth0;
    let email = user.email;
    console.log("email", email);
   let dbData= await axios.get(`${process.env.REACT_APP_SERVER}/getFromDB?email=${email}`);

   this.setState({
    dbData:dbData.data
   })
   console.log("dbData",this.state.dbData);

  }


  deleteFromDB=  async (item)=>{
    ///// deleteFromDB/:id?email=emil
console.log("deleteFromDB");
let { user } = this.props.auth0;
let email = user.email;
console.log("email", email);
let id=item._id;
console.log("id", id);

let newDBData= await axios.delete(`${process.env.REACT_APP_SERVER}/deleteFromDB/${id}?email=${email}`)

this.setState({
  dbData:newDBData.data

})
this.componentDidMount();
  }


  updateFromDB = async (choosen,newobj) =>{
console.log("updaaaaate");
let { user } = this.props.auth0;
let email = user.email;
console.log("email", email);
let id=choosen._id;
console.log("id", id);

let newData= await axios.put(`${process.env.REACT_APP_SERVER}/updateFromDB/${id}?email=${email}`,newobj)


this.setState({
  dbData:newData.data

})
this.componentDidMount();


  }  
  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {this.state.dbData &&
          this.state.dbData.map((choclate) => {
            return <FavChocolateCard choclate={choclate} deleteFromDB={this.deleteFromDB} updateFromDB={this.updateFromDB}/>;
          })}
          { !this.state.dbData   &&
           <p>
            Your List is Empty ¯_(ツ)_/¯
          </p> } 


      </>
    )
  }
}

export default withAuth0(MyFavorites);

