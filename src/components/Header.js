import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import Logout from './user/Logout';
import { logout } from '../actions/currentUser';
import history from '../history';
 
class Header extends React.Component {
  constructor () {
    super(); 
    this.state = {
      isClicked: false
    }
  }

  handleMenuToggle = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  handleLogout = () => {
    this.props.logout()
    history.push('/')

    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    if (this.props.currentUser && !this.state.isClicked) {
      return(
        <div className="ui teal seven item menu">

          <button onClick={this.handleMenuToggle} className="toggle"><i className="left tasks icon"></i></button>

          <div className="header item navitem">
            <NavLink style={{ color: 'rgb(250, 239, 135, 0.967)', 'fontSize': '25px', 'borderStyle': 'double'}} exact to="">FoodMood</NavLink>
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
              
            {this.props.loggedIn ? <div className="ui item logout"><Logout/></div>: null}
          </div>
          
        </div>
      )
    } else if (this.props.currentUser && this.state.isClicked) {
      return (
        <div className="ui grid">
        <div className="four wide column">
          <div className="ui vertical fluid tabular menu">
            <Link onClick={this.handleMenuToggle} exact to="/lists" className="item">
              Lists
            </Link>
            <Link onClick={this.handleMenuToggle} exact to="/lists/new" className="item">
              Create List
            </Link>
            <Link onClick={this.handleMenuToggle} exact to="/restaurants" className="item">
              Browse Restaurants
            </Link>
            <Link onClick={this.handleMenuToggle} exact to="/recipes" className="item">
              Browse Recipes
            </Link>
            <button onClick={this.handleLogout} className="ui negative">Logout</button>
          </div>
        </div>
      </div>
      )
    } else if (!this.props.currentUser && !this.state.isClicked) {
      return (
        <div className="ui teal two item menu">
          <button onClick={this.handleMenuToggle} className="toggle"><i className="left tasks icon"></i></button>

          <div className="header">
            <h1>Welcome to FoodMood, please <Link to="/login">Log In</Link> into your account or <Link to="/signup">Sign Up</Link></h1>
          </div>
            
          <div className="right menu">
            <strong className="logo">FoodMood</strong>
          </div>

            <div className="right menu">
              {this.props.loggedIn ? <div className="ui item logout"><Logout/></div> : null}
            </div>
          
        </div>
      )
    } else {
      return (
        <div className="ui grid">
          <div className="four wide column">
            <div className="ui vertical fluid tabular menu">
              <div><h3><Link onClick={this.handleMenuToggle} to="/login">Log In</Link></h3></div>
              <div><h3><Link onClick={this.handleMenuToggle} to="/signup">Sign Up</Link></h3></div>
            </div>
        </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser, 
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(Header);