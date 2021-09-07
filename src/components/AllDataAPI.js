import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import ChocolateCard from "./ChocolateCard";

class AllDataAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
    };
  }

  async componentDidMount() {
    let dataFromAPi = await axios.get(
      `${process.env.REACT_APP_SERVER}/getApiData`
    );

    this.setState({
      apiData: dataFromAPi.data,
    });
    console.log("api data", this.state.apiData);}

    addToFav = async (item) => {
      console.log("addToFav");

      let { user } = this.props.auth0;
      let email = user.email;
      console.log("email", email);
      await axios.post(
        `${process.env.REACT_APP_SERVER}/addToFav?email=${email}`,item
      );
    };

 
  render() {
    return (
      <div>
        <h1>All Data from the API</h1>
        <h3>Select your favorites :)</h3>
        {this.state.apiData &&
          this.state.apiData.map((choclate) => {
            return <ChocolateCard choclate={choclate} addToFav={this.addToFav}/>;
          })}
      </div>
    );
  }
}

export default withAuth0(AllDataAPI);
