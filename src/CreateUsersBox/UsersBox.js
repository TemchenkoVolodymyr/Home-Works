import React, {Component} from 'react';
import Users from "./Users/Users";
import {connect} from "react-redux";
import {getUsersAC} from "./Users/UsersAction";
import style from "./userBox.module.css"

class UsersBox extends Component {

  componentDidMount() {
    this.props.dispatch(getUsersAC())
  }

  render() {
    let {users} = this.props.users
    return (
      <>
      <h1>USERS</h1>
     <div className={style.userBox}>
       <Users users={users}/>
     </div>
        </>
    );
  }
}
let mapStateToProps = (store) => {
  return{
    users:store.users
  }

}

export default connect(mapStateToProps)(UsersBox);