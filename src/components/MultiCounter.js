import React, { Component } from 'react';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';

class MultiCounter extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSum/>
                </fieldset>
                <CounterGroupContainer/>
            </div>
        );
    }
}

export default MultiCounter;