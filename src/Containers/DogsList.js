import React, { Component } from "react";
import DogCard from "../Components/DogCard";
import api from '../dogs';
class DogsList extends Component {
  render() {
    return <div className="dogContainer">{api.map(dog => <DogCard key={dog.id} dog={dog} />)}</div>;
  }
}

export default DogsList;
