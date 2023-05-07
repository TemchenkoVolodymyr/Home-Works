import React, {Component} from 'react';
import spinner from "../assets/Spinner.svg";
class Loader extends Component {
  render() {
    return (
      <>
        <img src={spinner}/>
      </>
    );
  }
}

export default Loader;