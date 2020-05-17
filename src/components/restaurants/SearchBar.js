import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {

  state = {
    term: '',
    restaurants: []
  };

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.term);
  };

  render() {
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Enter Restaurant Name</label>
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

const mapStateToProps = state => {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(SearchBar);
