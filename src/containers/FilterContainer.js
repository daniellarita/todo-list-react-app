import React, {Component} from 'react';
import store from '../store';

export default class extends Component {

  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    console.log(this.props);
    return (
    	<div>
        <label>Views</label>
        <button onClick={this.props.handleClickCompletedView}>{this.props.completedViewSelected ? "View All" : "View Incomplete"}</button>
	    </div>
    );
  }

}