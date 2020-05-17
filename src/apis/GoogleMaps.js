import React from 'react'; 
import GoogleMapReact from 'google-map-react'; 
// import { mapsKey } from './config';
import { connect } from 'react-redux';

class GoogleMaps extends React.Component{
  
  handleApiLoaded = (map, maps) => {
    const myPosition = {lat: this.props.location.location.latitude, lng: this.props.location.location.longitude}
    new maps.Marker({
      position: myPosition,
      map,
      title: 'Here I am!'
    });
  }

  render() {
    const lat = this.props.location ? this.props.location.location.latitude : null
    const lng = this.props.location ? this.props.location.location.longitude : null

  // const restLocations = this.props.restaurants.map(res => { return {lat: res.coordinates.latitude, lng: res.coordinates.longitude}})

  const Marker = props => {
    return (
    <div>
      <button className="restaurant-marker">
        <img style={{height: '50px', width: '50px'}} src="/img/pin.png" alt="Food-Mood" />
        <div className="marker-text">
          <strong>{props.name}</strong>
        </div>
      </button>
    </div>
    )
  }
  
    if (this.props.location) {
      return(
        <div style={{ height: "100vh", width: "100%", position: 'relative'}}>
          <GoogleMapReact 
            // bootstrapURLKeys={{ key: mapsKey}}
            defaultCenter={{lat, lng}}
            defaultZoom={11} 
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
            >
            { this.props.restaurants.map(restaurant => (
            <Marker key={restaurant.id} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} name={restaurant.name} >
              <button className="restaurant-marker">
                 <img src="/img/pin.png" alt="Food-Mood" />
              </button>
          </Marker> 
                 ))}
          </GoogleMapReact>

        </div>
      )
    }
    return(<div>Loading your location</div>)
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(GoogleMaps);

