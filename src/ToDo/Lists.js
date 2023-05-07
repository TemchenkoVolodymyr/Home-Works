

 import React, {Component} from 'react';

 class Lists extends Component {
   render() {
     console.log(this.props.lists)
     return (
      <>

        <ul>
          {this.props.lists ? this.props.lists.map(item => <li>{item}</li>)  : null}
        </ul>
      </>
     );
   }
 }

 export default Lists;