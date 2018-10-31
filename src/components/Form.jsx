import React, { Component } from 'react';
import { css } from 'emotion';

class Form extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.state = {
      todoText: '',
      buttonText: 'Submit'
    }
  }

  handleChange = (todoText) => this.setState({ todoText })

  render() {
    return (<form>
      Add A Todo
      <input type='text' onChange={(e) => this.handleChange(e.target.value)} value={this.state.todoText} />
      {this.props.render(this.state)}
    </form>)
  }
}

export default Form;