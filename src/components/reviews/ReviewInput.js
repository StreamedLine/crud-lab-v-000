import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor() {
  	super();

  	this.state = {
  		text: ''
  	}
  }

  handleSubmit = (e)=> {
  	e.preventDefault();
  	this.props.store.dispatch({type: 'ADD_REVIEW', text: this.state.text, restaurantId: this.props.restaurantId})
  };

  handleChange = (e)=> {
  	this.setState({text: e.target.value})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
		     <label htmlFor="name">Review</label>
		      <input type="text" onChange={this.handleChange} value={this.state.text} />
		      <button type="submit">submit</button>
        </form>
        <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
