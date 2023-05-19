import React from "react";
import {Component} from "react";
import Dialog from "./Dialog";
import SideLeftDialog from "./SideLeftDialog";
import SideRightDialog from "./SideRightDialog";

class WelcomeDialog extends Component {
  render() {
    return (
      <>
        <Dialog color="blue" left={<SideLeftDialog/>} right={<SideRightDialog/>}>
          <h1 className="Dialog-title">
            Добро пожаловать
          </h1>
          <p className="Dialog-message">
            Спасибо, что посетили наш космический корабль!
          </p>
        </Dialog>
      </>
    )
  }
}

export default WelcomeDialog;