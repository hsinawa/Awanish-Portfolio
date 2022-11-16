
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {ConnectReducer} from './reducers/connectreducer'
import thunk from 'redux-thunk'


const FinalReducer = combineReducers(
  { 

    ConnectReducer:ConnectReducer
  }
)




const InitialState = {

}



const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(FinalReducer, InitialState, composeWithDevTools(
  applyMiddleware(thunk)

))


export default store;