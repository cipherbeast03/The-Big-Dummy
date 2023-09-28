import rootReducer from './Actions/actions';
import { createstore } from 'redux';
const store = createstore(rootReducer);
export default store;
