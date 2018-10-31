import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import ConsumerWithContainer from './HOCs/ConsumerWithContainer';
import List from './List';

const titleClassName = css`
  font-family: Helvetica;
  color: blue;
`

const Header = (props) => {
  return (
    <React.Fragment>
      <h1 className={titleClassName}>{props.title}</h1>
      {props.subTitle}
      <ConsumerWithContainer children={<List />} />
    </React.Fragment>
  )
}

Header.propTypes = { 
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number]
  ),
};

Header.defaultProps = {
  title: 'placeholder'
}


export default Header;