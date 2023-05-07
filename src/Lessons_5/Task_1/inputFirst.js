import React, {Component} from 'react';

class InputFirst extends Component {
  render() {
    return (
     <>
        <input onChange={(e) => this.props.onChangeInputValue(e)} value={this.props.inputValueFirst}/>
     </>
    );
  }
}

export default InputFirst;