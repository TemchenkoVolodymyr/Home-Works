import React, {Component} from "react";
import './App.css';
import HideComponent from "./Lessons_4/Task_1/HideComponent";
import CreateList from "./Lists/List";

class App extends Component {
  state = {
    showComponent: false,
    listItem:[
      {item:'Car', id:1},
      {item:'House', id:2},
      {item:'Would be',id:3},
    ],
    colorItems:'brown',
    r:['red','blue','orange','grey','yellow','brown','black'],
  }

  hideComponentHandle() {
    this.setState(() => ({
      showComponent: !this.state.showComponent
    }))
  }
  changeColorItemHandler = () => {
    let color = this.randomColor(this.state.r)
    this.setState(() => ({
      colorItems:color
    }))
  }
  randomColor(colors) {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]

  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.hideComponentHandle()}>hide</button>
        {this.state.showComponent ? <HideComponent status={this.state.showComponent}/> : null}
        <br />
        <CreateList listItem={this.state.listItem} color={this.state.colorItems} changeColor={() => this.changeColorItemHandler()}/>
      </div>
    )
  }
}

export default App;
