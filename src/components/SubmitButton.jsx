import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const buttonClassName = css`
  background-color: green;
  color: white;
  font-size: 18px;
  cursor: pointer;
`

const SubmitButton = ({ renderProps }) => {
  const { buttonText, todoText, addTodo } = renderProps;
  return <button className={buttonClassName} onClick={(e) => {
    e.preventDefault();
    addTodo(todoText)}
  }>{buttonText}</button>
}

SubmitButton.propTypes = {
  buttonText: PropTypes.string,
}

export default SubmitButton;