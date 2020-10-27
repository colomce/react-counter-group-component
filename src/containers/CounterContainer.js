import { connect } from 'react-redux';
import { increaseSum, decreaseSum, revertSum } from '../action';
import Counter from '../components/Counter';

const mapDispatchToProps = (dispatch) => ({
    increaseSum: () => {dispatch(increaseSum())},
    decreaseSum: () => {dispatch(decreaseSum())},
    revertSum: (value) => {dispatch(revertSum(value))},
});

const CounterContainer = connect(null, mapDispatchToProps)(Counter);
export default CounterContainer;