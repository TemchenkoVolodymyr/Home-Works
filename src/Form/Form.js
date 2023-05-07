import React, {Component} from 'react';
import Input from "./Input/Input";
import {connect} from "react-redux";
import {addJsonData, inputActionCreator, inputActionCreatorSecond, inputActionCreatorThird} from "./Input/inputAction";
import {conversionAC} from "./inputForConversionValue/conversionAC";
import Conversion from "./inputForConversionValue/Conversion";

class Form extends Component {

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
        <form >
          <Input value={valueForInputForm} dispatch={dispatch} actionCreator={inputActionCreator}/>
          <Input value={valueForInputFormSecond} dispatch={dispatch} actionCreator={inputActionCreatorSecond} />
          <Input value={valueForInputFormThird} dispatch={dispatch} actionCreator={inputActionCreatorThird}/>
          <input type="submit" value="add" onClick={(e) => this.removeHandler(e)}/>
        </form>
        {jsonFormData.map(item => <p>{item}</p>)}
        <br />
        <Conversion value={conversionValue} dispatch={dispatch} actionCreator={conversionAC}/>
        <p>{didConverseValue}</p>
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
export default connect(mapStateToProps)(Form);