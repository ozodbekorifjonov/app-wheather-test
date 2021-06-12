import {combineReducers} from 'redux'
import recipesReducer from './recipes';
import dailyReducer from './daily';

const rootReducer = combineReducers({
    recipes: recipesReducer,
    daily: dailyReducer
})

export default rootReducer
