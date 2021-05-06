import { createStore, combineReducers } from 'redux';
import { Dishes } from './dish';
import { Comments } from './comment';
import { Promotions } from './promotion';
import { Leaders } from './leader';

// asi es como combinamos los reducers 
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })        
    )
    return store;
}