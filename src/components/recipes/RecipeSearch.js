import React from 'react'; 

class RecipeSearch extends React.Component {
  state = {
    query: ''
  };

    handleChange = (e) => {
      this.setState({
        query: e.target.value
      });
    };

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.search(this.state.query);
    };

    render() {
      return(
        <div className="search-bar ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label>Enter Recipe Name</label>
              <input
              type="text" value={this.state.term}
              onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
      );
    }
}

export default RecipeSearch;
