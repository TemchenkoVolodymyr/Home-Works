/*Задание 2
Создайте компонент с двумя контролируемыми компонентами, которые рендерят input.
 Они должны принимать только числа. После того, как пользователь вводит число в input,
его содержимое выводится в блоке под ним с конвертацией - number * 0,5 и number * 0,05 соответственно*/
import React, {Component} from 'react';
import ConvInputFirst from "./ConvInputFirst";
import ConvInputSecond from "./ConvInputSecond";

class Conversion extends Component {
  state = {
    inputValue: 0,
    inputValueSecond: 0,
    conversionFirst:"",
    // conversionSecond:"",
  }
  // conversion = (e) => {
  //   let convers = e.target.value * 0.5
  //   this.setState(() => ({
  //     conversionFirst: convers
  //   }))
  //   this.setState(() => ({
  //     inputValue: e.target.value
  //   }))
  // }
  // conversionSecond = (e) => {
  //   let convers =  e.target.value * 0.05
  //   this.setState(() => ({
  //     conversionFirst: convers
  //   }))
  //   this.setState(() => ({
  //     inputValueSecond: e.target.value
  //   }))
  // }

  render() {
    return (
      <>
        <ConvInputFirst />
        <ConvInputFirst />
        <p>{this.state.conversionFirst}</p>
      </>
    );
  }
}

export default Conversion;