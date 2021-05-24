import React from "react";
import { connect } from "react-redux";
import MyLists from "./lists/MyLists";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        {!this.props.currentUser ? (
          <div className="ui message">
            <div className="ui center aligned header">
              <br />
              <h3>
                A meal tracking app designed to work for you. Plan your meals by
                browsing recipes or searching for nearby restaurants. Or create
                your own and add them to your logs. Enable your location to
                enjoy all of the features.
              </h3>
              <h6>Note: Google Map will have a filter due to the free API.</h6>
            </div>
          </div>
        ) : (
          <MyLists />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Home);
