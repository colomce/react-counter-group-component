import React, { Component } from 'react';
import CounterGroupSum from './CounterGroupSum';
import CounterGroup from './CounterGroup';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum : 0, 
            size: 0
        }
    }
    
    addToSum = (valueToAdd) => {
        this.setState((prevState) => ({sum : prevState.sum + valueToAdd}));
    }

    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSum sum={this.state.sum}/>
                </fieldset>
                <CounterGroup size={this.state.size} addToSum={this.addToSum}/>
            </div>
        );
    }
}

export default MultiCounter;