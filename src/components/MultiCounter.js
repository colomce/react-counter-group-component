import React, { Component } from 'react';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';

class MultiCounter extends Component {
    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSumContainer/>
                </fieldset>
                <CounterGroupContainer/>
            </div>
        );
    }
}

export default MultiCounter;