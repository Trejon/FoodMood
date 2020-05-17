import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

class MealCard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { meal } = this.props
    return (
       meal ? <div className="ui centered card" style={{width: '500px'}}>
                <div className="center aligned content">
                  <div className="header">
                    <h2>{meal.attributes.name}</h2>
                  </div>
                  <div className="meta">
                    <p>{meal.attributes.kind}</p>
                  </div>
                  <div className="description">
                    <ul>
                      <h4>{meal.attributes.meal_type}</h4>
                      <h4>{meal.attributes.description}</h4>
                      <h4>{format(new Date(meal.attributes.meal_date), 'MM-dd-yyyy')}</h4>
                      <h5><a href={meal.attributes.url} target="_blank" rel="noopener noreferrer">Website</a></h5>
                      <Link to={`/lists/${meal.attributes.list_id}`}><h5>List: {meal.attributes.list.name}</h5></Link>
                    </ul>
                  </div>
                </div>
                <div className="center aligned extra content">
                  <Link className="ui button primary" to={`/meals/${meal.id}/edit`}><h5>Edit this meal</h5></Link>
                </div>
              </div> : 
              <p>This is the meal card with no meal!</p>
        );  
  }
}

export default MealCard;