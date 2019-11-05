import {combineReducers} from 'redux';
import headReducer from '../components/head/store/headReducer'
import homeReducer from '../components/home/store/homeReducer'


export default  combineReducers({//key是自己取的名字
    head :headReducer,
    home :homeReducer,

})