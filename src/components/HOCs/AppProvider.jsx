import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const containerClassName = css`
  text-align: center;
`

import Header from '.././Header';

export const RootContext = React.createContext()

class App extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      todos: [{ done: true, text: 'Learn PropTypes'}, { done: false, text: 'Learn Context' }, { done: false, text: 'Learn Hooks' }],
    }
  }

  static defaultProps = {
    children: <Header />
  }

  addTodo = (text) => this.setState({ todos: [...this.state.todos, { done: false, text }]});

  toggleTodoComplete = (index) => {
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    
    this.setState({ todos });
  }

  render() {
    const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child => {
      return React.cloneElement(child, {
        title: 'Advanced React Demo',
        subTitle: process.env.NODE_ENV === 'production' ? null : 'Yeah... it\'s another todo list'
      })
    })

    return (
      <RootContext.Provider value={{todos: this.state.todos, toggleTodoComplete: this.toggleTodoComplete, addTodo: this.addTodo }}>
        <div className={containerClassName}>
          {childrenWithProps}
        </div>
      </RootContext.Provider>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App;