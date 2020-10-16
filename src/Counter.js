import React, { Component } from 'react';

class Counter extends Component {


    handleIncrease(){
        console.log('Increase');
    }

    handleDecrease(){
        console.log('Decrease');
    }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;