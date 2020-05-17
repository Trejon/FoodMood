import React from 'react';
import { createList } from '../../actions/myLists'; 
import { connect } from 'react-redux';
import ListForm from './ListForm';

const NewListFormWrapper = ({ createList, recipe }) => {

  const handleSubmit = (event, formData, userId ) => {
    event.preventDefault()
    createList({
      ...formData,  
      userId
    })
  }

  return (
    <div>
      <ListForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect(null, { createList })(NewListFormWrapper);
