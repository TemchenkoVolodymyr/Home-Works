import React, {Component} from "react";

class HideComponent extends Component{
  componentDidMount() {
    this.id = setInterval(() => {
    },1000)
      alert('Component did mount')
  }
  componentWillUnmount() {
    clearInterval(this.id)
      alert('Component did unmount')
  }
  render() {
    return(
      <>
        <div>There text will be hide </div>
      </>
    )
  }
}
export default HideComponent;