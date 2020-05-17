import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'


const Restaurant = (props) => {

  let restaurants = props.restaurants.map(restaurant => 
    <div className="column" key={restaurant.id}> 
      <div className="ui fluid card" style={{height: '800px'}}>
        <div className="image">
          <img style={{height: '400px'}} src={restaurant.image_url} alt={restaurant.name} />
        </div>

        <div className="content">
          <a className="header" href={restaurant.url} target="_blank" rel="noopener noreferrer"><h3>{restaurant.name}</h3></a>
          <div className="description">
            <h5>Phone Number: {restaurant.display_phone}</h5>
            <h5>Address: {restaurant.location.address1} {restaurant.location.city} {restaurant.location.state} {restaurant.location.zip_code}</h5>
          </div>

          <div className="extra">
            <h5>Rating: {restaurant.rating} ({restaurant.review_count} reviews)</h5>
          </div>
        </div>

        <Dropdown className="ui button primary" text='Add to list'>
          <Dropdown.Menu className="menu">
            { props.lists.map(l => (
              <Link className='item' key={l.id} to={{pathname: `/lists/${l.id}`, query: {renderedMeal: restaurant, mealType: 'restaurant'}}}>{l.attributes.name}</Link>))}
          </Dropdown.Menu>
        </Dropdown>
      </div> 
    </div>
  );
  
  return(
    <div className="ui four column grid">
      {restaurants}
    </div>
  )
} 

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(Restaurant);