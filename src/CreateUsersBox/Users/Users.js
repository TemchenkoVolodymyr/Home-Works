import React, {Component} from 'react';
import style from "./Users.module.css"

class Users extends Component {
  render() {
    let {users} = this.props

    let usersMap = users.map(user =>
      <div className={style.userInfo}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
        <p>{user.website}</p>
      </div>)
    return (
      <>
        {usersMap}
      </>
    );
  }
}

export default Users;