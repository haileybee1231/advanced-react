import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import Form from './Form';
import SubmitButton from './SubmitButton';

const List = ({ todos, toggleTodoComplete, addTodo }) => {
  return <React.Fragment>
    <ul children={
      Object.entries(todos).map(([index, listItem]) => {
        return <ListItem 
          listItem={listItem} 
          key={index} 
          index={+index}
          toggleTodoComplete={toggleTodoComplete}
        />
      })
    }/>
    <Form render={(renderProps) => <SubmitButton renderProps={{ ...renderProps, addTodo}} />} />
  </React.Fragment>
}

List.propTypes = {
  todos: PropTypes.array,
  toggleTodoComplete: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
}

List.defaultProps = {
  // no-ops to avoid default issues
  toggleTodoComplete: () => null,
  addTodo: () => null
}

export default List;