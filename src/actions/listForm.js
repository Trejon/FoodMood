import { UPDATE_LIST_FORM, RESET_LIST_FORM, SET_LIST_FORM_DATA_FOR_EDIT } from './types';


// synchronous
  export const updateListForm = (name, value) => {
    const formData = { name, value }
    return {
      type: UPDATE_LIST_FORM,
      formData
    }
  }

  export const resetListForm = () => {
    return {
      type: RESET_LIST_FORM
    }
  }

  export const setFormDataForEdit = list => {
    const listFormData = {
      name: list.attributes.name, 
      description: list.attributes.description
    }
    return {
      type: SET_LIST_FORM_DATA_FOR_EDIT, 
      listFormData
    }
  }
