import React from 'react';
import { RootContext } from './AppProvider';
import { css } from 'emotion';

const containerClassName = css`
  width: 30%;
  margin: auto;
`

const ConsumerWithContainer = ({ children }) => (
  <div className={containerClassName}>
    <RootContext.Consumer>
      {(context) => React.cloneElement(children, context)}
    </RootContext.Consumer>
  </div>
)

export default ConsumerWithContainer;