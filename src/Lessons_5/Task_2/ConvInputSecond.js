import React, {Component} from 'react';

class ConvInputSecond extends Component {
  render() {
    return (
      <>
        <input value={this.props.value} type="number" placeholder="write some numbers" onChange={(e) => this.props.conversionSecond(e)}/>
        <p>{this.props.conversion}</p>
      </>
    );
  }
}

export default ConvInputSecond;