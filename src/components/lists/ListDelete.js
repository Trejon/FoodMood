import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { deleteList } from '../../actions/myLists'; 

class ListDelete extends React.Component {

  renderActions = () => {
    return (
      <>
        <button 
          className="ui button negative" 
          onClick={() => this.props.deleteList(this.props.list.id)}>
          Delete
        </button>
        <Link to={`/lists/${this.props.list.id}`} className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent = () => {
    if (!this.props.list) {
      return 'Are you sure you want to delete this list?'
    } 
      return `Are you sure you want to delete the list: ${this.props.list.attributes.name}?`
  }

  render() {
    if (this.props.list) {
    return(
        <Modal 
          title="Delete List" 
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push(`/lists/${this.props.list.id}`)}
        />
      ) 
    } else {
      return (<div>Loading list</div>)
    }
  }
};

export default connect(null, { deleteList })(ListDelete);
