import React, {Component} from 'react';
import Input from "./Input/Input";
import {connect} from "react-redux";
import {addJsonData, inputActionCreator, inputActionCreatorSecond, inputActionCreatorThird} from "./Input/inputAction";
import {conversionAC} from "./inputForConversionValue/conversionAC";
import ConvInputFirst from "./inputForConversionValue/Conversion";
import style from "./FormTEST.module.css"

class FormTEST extends Component {

  removeHandler(e) {
    e.preventDefault()
    if(this.props.value.valueForInputForm) {
      this.props.dispatch(addJsonData(this.props.value.valueForInputForm))
    }
    if(this.props.value.valueForInputFormSecond) {
      this.props.dispatch(addJsonData(this.props.value.valueForInputFormSecond))
    }
    if(this.props.value.valueForInputFormThird){
      this.props.dispatch(addJsonData(this.props.value.valueForInputFormThird))
    }
  }
  render() {
    const {valueForInputForm,valueForInputFormSecond,valueForInputFormThird,jsonFormData} = this.props.value
    const {dispatch,conversionValue,didConverseValue} = this.props
    return (
      <>
        <div className={style.container}>
        <form className={style.form}>
         <p>Name</p>
          <Input value={valueForInputForm} dispatch={dispatch} actionCreator={inputActionCreator} placeholder={"Введите ваше имя"}/>
          <p>Surname</p>
          <Input value={valueForInputFormSecond} dispatch={dispatch} actionCreator={inputActionCreatorSecond} placeholder={"Введите вашу Фамилию"} />
          <p>City</p>
          <Input value={valueForInputFormThird} dispatch={dispatch} actionCreator={inputActionCreatorThird} placeholder={"Введите ваш город"}/>
          <input className={style.Submit} type="submit" value="add" onClick={(e) => this.removeHandler(e)} />
        </form>
        {jsonFormData.map(item => <p>{item}</p>)}
        <br />
        <ConvInputFirst value={conversionValue} dispatch={dispatch} actionCreator={conversionAC}/>
        <p>{didConverseValue}</p>
        </div>
      </>
    );
  }
}

let mapStateToProps = (store) => {
  return {
    value: store.inputForForm,
    conversionValue:store.conversionValue.conversionInputValue,
    didConverseValue:store.conversionValue.didConverseValue,
  }
}
export default connect(mapStateToProps)(FormTEST);