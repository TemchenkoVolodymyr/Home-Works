// Задание 1
// Создайте компонент формы с тремя контролируемыми компонентами, которые рендерят input.
// После отправки формы - страница не перезагружается, а содержимое полей выводится в виде json под формой.

import {Component} from "react";
import React from "react";
import InputFirst from "./inputFirst";

class Form extends Component {
  state = {
    inputValueFirst: "",
    inputValueSecond: "",
    inputValueThird: "",
    data: [],

  }
  onChangeInputValue = (e) => {
    this.setState(() => ({
      inputValueFirst: e.target.value
    }))
  }
  onChangeInputValueSecond = (e) => {
    this.setState(() => ({
      inputValueSecond: e.target.value
    }))
  }
  onChangeInputValueThird = (e) => {
    this.setState(() => ({
      inputValueThird: e.target.value
    }))
  }
  onSubmitHandler = (e) => {
    let jsonData = {
      first: this.state.inputValueFirst,
      second: this.state.inputValueSecond,
      third: this.state.inputValueThird
    }
    this.setState(() => ({
      data: [...this.state.data, JSON.stringify(jsonData)],
      inputValueFirst: "",
      inputValueSecond: "",
      inputValueThird: "",
    }))
    e.preventDefault()
  }

  render() {
    return (
      <>
        <form>
          <InputFirst inputValueFirst={this.state.inputValueFirst}
                      onChangeInputValue={(e) => this.onChangeInputValue(e)}/>
          <InputFirst inputValueFirst={this.state.inputValueSecond}
                      onChangeInputValue={(e) => this.onChangeInputValueSecond(e)}/>
          <InputFirst inputValueFirst={this.state.inputValueThird}
                      onChangeInputValue={(e) => this.onChangeInputValueThird(e)}/>
          <input type="submit" value="send" onClick={(e) => this.onSubmitHandler(e)}/>
          {this.state.data.map(data => <p>{data}</p>)}
        </form>
      </>
    )
  }
}

export default Form;