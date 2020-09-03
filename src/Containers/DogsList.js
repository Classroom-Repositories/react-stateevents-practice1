import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'

class DogList extends Component {
  state = {
    api: apiResponse
  }

  dogs = () => {
    return apiResponse.map((dog) => <DogCard key={dog.id} dog={dog} />)
  }
  render() {
    return <div className="list">{this.dogs()}</div>;
  }
}

export default DogList;
