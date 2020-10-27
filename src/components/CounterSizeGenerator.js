import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    
    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {size: value}
        }, () => {
            this.props.updateCounterSize(value);
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="size"> Generate </label>
                <input  type="number"
                        name="size"
                        id="size"
                        onChange={this.onChange} />
                <label htmlFor="size"> Counters </label>
            </div>
        );
    }
}

export default CounterSizeGenerator;