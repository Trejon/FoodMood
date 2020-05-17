import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import Logout from './user/Logout';
 
 
const Header = ({ currentUser, loggedIn }) => {
  if (currentUser) {
    return(
      <div className="ui teal six item menu">

        <div className="header item navitem">
          <NavLink style={{ color: 'rgb(250, 239, 135, 0.967)', 'fontSize': '40px', 'borderStyle': 'double'}} exact to="">FoodMood</NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/lists"><h4>Lists</h4></NavLink>
        </div>
          
        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/lists/new"><h4>Create List</h4></NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/restaurants"><h4>Search Restaurants</h4></NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/recipes"><h4>Search Recipes</h4></NavLink>
        </div>
  
        <div className="right menu">
            
          {loggedIn ? <><p className="item loggedin">Currently logged in as {currentUser.currentUser.data.attributes.name}</p> <div className="ui item logout"><Logout/></div></> : null}
        </div>
        
      </div>
    )
  } else {
    return (
      <div className="ui teal one item menu">

        <div className="header item navitem">
          <h1>Welcome to FoodMood, please <Link to="/login">Log In</Link> into your account or <Link to="/signup">Sign Up</Link></h1>
        </div>
          
        <div className="right menu">
          <strong className="logo">FoodMood</strong>
        </div>

          <div className="right menu">
            {loggedIn ? <><p className="item loggedin">Currently logged in as {currentUser.currentUser.data.attributes.name}</p> <div className="ui item logout"><Logout/></div></> : null}
          </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser, 
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Header);