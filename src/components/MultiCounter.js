import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum : 0, 
            size: 0
        }
    }
    
    onSizeChange = (size) => {
        this.setState({size});
    }

    addToSum = (valueToAdd) => {
        this.setState((prevState) => ({sum : prevState.sum + valueToAdd}));
    }
    
    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGenerator onSizeChange={this.onSizeChange}/>
                    <CounterGroupSum sum={this.state.sum}/>
                </fieldset>
                <CounterGroup size={this.state.size} addToSum={this.addToSum}/>
            </div>
        );
    }
}

export default MultiCounter;