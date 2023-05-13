import pizzasReducer from './pizzas';
import filtersReducer from './filters';
import { combineReducers } from 'redux';

  const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
  })

  export default rootReducer;