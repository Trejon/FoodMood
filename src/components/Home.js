import React from 'react';
import { connect } from 'react-redux'; 
import MyLists from './lists/MyLists';

class Home extends React.Component{

  render() {
      return(
        <div>
          {!this.props.currentUser ?
         <div className="ui message"> 
          <div className="ui center aligned header">
         <br/><h3>A meal app designed to work for you. Enable your location to fully enjoy the features. Organize and keep track of your meal plans, browse recipes or restaurants for inspiration.</h3></div></div> : <MyLists /> }
        </div>
      )
  }
} 

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home);
