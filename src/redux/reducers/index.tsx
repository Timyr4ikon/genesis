import { combineReducers } from "redux";
import * as types from "../types";
import {
  Data,
  DataAction,
  currentQuestionPageActions,
  isCardsOpenAction,
  currentRewardAction,
} from "../types";

const dataInitialState: any  = {};
const data = (state = dataInitialState, action: DataAction): Data => {
  switch (action.type) {
    case types.SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
const currentQuestionPageInitialState: number = 0;
const currentQuestionPage = (
  state = currentQuestionPageInitialState,
  action: currentQuestionPageActions
): number => {
  switch (action.type) {
    case types.SET_CURRENT_QUESTION_PAGE:
      return (state += 1);
    case types.RESET_CURRENT_QUESTION_PAGE:
      return 0;
    default:
      return state;
  }
};
const isCardsOpenInitialState: boolean = false;
const isCardsOpen = (
  state = isCardsOpenInitialState,
  action: isCardsOpenAction
): boolean => {
  switch (action.type) {
    case types.SET_IS_CARDS_OPEN:
      return !state;
    default:
      return state;
  }
};
const currentRewardInitialState: string = "0";
const currentReward = (
  state = currentRewardInitialState,
  action: currentRewardAction
): string => {
  switch (action.type) {
    case types.SET_CURRENT_REWARD:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data,
  currentQuestionPage,
  isCardsOpen,
  currentReward,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
