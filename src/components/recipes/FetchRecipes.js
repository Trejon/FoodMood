import React from 'react'; 
import RecipeSearch from './RecipeSearch';
import { connect } from 'react-redux';
import Recipe from './Recipe';

class FetchRecipes extends React.Component{
  constructor() {
    super()
 
    this.state = {
      recipes: [], 
    }
  }

    fetchRecipes = (query) => {
      fetch(`https://forkify-api.herokuapp.com/api/search?&q=${query}`)
        .then(res => res.json())
        .then(result => this.setState({
          recipes: result.recipes
        }))
    }

  render() {
    if(!this.state.recipes) {
      return(
        <div>
          <h5>Search Recipes</h5>
          <RecipeSearch search={this.fetchRecipes} />
        </div>
      )
    } 
    return(
      <div>
        <h5>Search Recipes</h5>
        <RecipeSearch search={this.fetchRecipes} />
        <Recipe recipes={this.state.recipes} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(FetchRecipes);