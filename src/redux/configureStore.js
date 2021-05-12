import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dish';
import { Comments } from './comment';
import { Promotions } from './promotion';
import { Leaders } from './leader';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// asi es como combinamos los reducers, el segundo paramentro que es applyMidle.. es el enhancer
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)        
    )
    return store;
}