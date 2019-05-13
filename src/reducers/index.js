import { combineReducers } from 'redux';

import QuestionsReducer from './reducer_questions';
import ChosenOptionsReducer from './reducer_chosen';
import HideModalReducer from './reducer_display_modal';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  chosenOptions: ChosenOptionsReducer,
  displayModal: HideModalReducer
});

export default rootReducer;
