import React from "react";
import SearchBar from "./SearchBar";
// import { requestOptions } from '../../apis/config'
import { connect } from "react-redux";
import Restaurant from "./Restaurant";
import GoogleMaps from "../../apis/GoogleMaps";
class FetchRestaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
    };
  }

  //new method
  fetchYelpApi = (term) => {
    const data = {
      term: term,
      latitude: this.props.location.location.latitude,
      longitude: this.props.location.location.longitude,
    };
    fetch("http://localhost:3001/api/v1/search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(
        (result) =>
          this.setState({
            restaurants: result.businesses,
          })
        // .catch((error) => console.log("error", error))
      );
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchYelpApi();
    }
  }

  render() {
    if (!this.state.restaurants) {
      return (
        <div>
          <h5>Search Restaurants Near You</h5>
          <SearchBar search={this.fetchYelpApi} />
          <br />
          <GoogleMaps restaurants={this.state.restaurants} />
        </div>
      );
    }
    return (
      <div>
        <h5>Search Restaurants Near You</h5>
        <SearchBar search={this.fetchYelpApi} />
        <Restaurant restaurants={this.state.restaurants} />
        <br />
        <GoogleMaps restaurants={this.state.restaurants} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(FetchRestaurants);
