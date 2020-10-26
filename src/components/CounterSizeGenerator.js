import React, { Component } from 'react';

class CounterSizeGenerator extends Component {

    constructor(props) {
        super(props);
        this.state = {size: 0}
    }
    
    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return {size: value}
        }, () => {
            this.props.onSizeChange(value);
        });
    }

    render() {
        return (
            <div>
                <label htmlFor="size"> Generate </label>
                <input  type="number"
                        name="size"
                        id="size"
                        value= {this.state.size}
                        onChange={this.onChange} />
                <label htmlFor="size"> Counters </label>
            </div>
        );
    }
}

export default CounterSizeGenerator;