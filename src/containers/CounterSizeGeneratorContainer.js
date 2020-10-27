import { connect } from 'react-redux';
import { updateCounterSize} from '../action';
import CounterSizeGenerator from '../components/CounterSizeGenerator';

const mapDispatchToProps = (dispatch) => ({
    updateCounterSize: (size) => {dispatch(updateCounterSize(size))}
});

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);
export default CounterSizeGeneratorContainer;