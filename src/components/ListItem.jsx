import React from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

const doneClassName = css`
  text-decoration: line-through;
  cursor: pointer;
`

const cursorClassName = css`
  cursor: pointer;
`

const ListItem = ({ listItem: { done, text }, index, toggleTodoComplete }) => (
  <li 
    className={done ? doneClassName : cursorClassName}
    onClick={() => toggleTodoComplete(index)}
  >
    {text}
  </li>
)

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleTodoComplete: PropTypes.func.isRequired,
}

export default ListItem;