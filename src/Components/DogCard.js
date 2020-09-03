import React from "react";
class DogCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }

  render() {
    let { dog } = this.props
    return (
      <div className="card">
        <span className="content">
          <h2 >{dog.name}</h2>
          <img alt="dog-pic" src={dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.clickHandler}>Bark</button>
        </span>
        {this.state.clicked ?
          <img alt="bark" src="https://www.kindpng.com/picc/m/345-3456152_transparent-dog-barking-png-png-download.png" />
          // <h3>Bark</h3>
          :
          null
        }
      </div>
    );
  }
}

export default DogCard;
