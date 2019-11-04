import { createStore ,combineReducers} from 'redux'
import { todos } from './Reducer/ToDos'
import { loadState, saveState } from './LocalStorage'
import { visibilityFilter } from './Reducer/VisibilityFilter'

const configureStore = () => {
  const combineReducer = combineReducers({todos,visibilityFilter});
  const persistedState = loadState();
  const store = createStore(combineReducer,persistedState)

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}

export default configureStore