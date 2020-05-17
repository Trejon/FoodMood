import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { deleteMeal } from '../../actions/myMeals'; 

class MealDelete extends React.Component {

  renderActions = () => {
    return (
      <>
        <button 
          className="ui button negative" 
          onClick={() => this.props.deleteMeal(this.props.meal.id)}>
          Delete
        </button>
        <Link to={`/meals/${this.props.meal.id}`} className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent = () => {
    if (!this.props.meal) {
      return 'Are you sure you want to delete this meal?'
    } 
      return `Are you sure you want to delete the meal: ${this.props.meal.attributes.name}?`
  }

  render() {
    if (this.props.meal) {
    return(
        <Modal 
          title="Delete Meal" 
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push(`/meals/${this.props.meal.id}`)}
        />
      ) 
    } else {
      return (<div>Loading meal</div>)
    }
  }
};

export default connect(null, { deleteMeal })(MealDelete);
