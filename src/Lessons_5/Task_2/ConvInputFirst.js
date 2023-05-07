import React, {Component} from 'react';

class ConvInputFirst extends Component {
  render() {
    return (
     <>
       <input  value={this.props.value} type="number" placeholder="write some numbers" onChange={(e) => this.props.conversionFirst(e)}/>

     </>
    );
  }
}

export default ConvInputFirst;