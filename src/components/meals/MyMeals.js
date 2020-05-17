import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyMeals = (props) => {
  const mealCards = props.meals.length > 0 ? 
    props.meals.map(m => (<div className="item" 
    key={m.id}>
      <i className="large list icon"></i>
       <div className="content">
        <div className="header"><h5><Link 
          to={`/meals/${m.id}`}>{m.attributes.name}
        </Link></h5></div>
        <div className="description">{m.attributes.description}</div>
       </div>
      </div>)) : <h2>You currently don't have any meals.</h2>

  return(
    <div>
    <h3>These are your lists:</h3>
    <div className="ui list">
      {mealCards}
      </div>
    </div> 
    
  )
}

const mapStateToProps = ({ myMeals }) => {
  return {
    meals: myMeals
  }
}

export default connect(mapStateToProps)(MyMeals);