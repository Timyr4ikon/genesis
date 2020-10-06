import * as types from "../types";
import { DataAction, currentRewardAction } from "../types";

export const setCurrentQuestionPage = () => ({
  type: types.SET_CURRENT_QUESTION_PAGE,
});
export const resetCurrentQuestionPage = () => ({
  type: types.RESET_CURRENT_QUESTION_PAGE,
});
export const setData = (data:any): DataAction => ({
  type: types.SET_DATA,
  payload: data,
});
export const setIsCardsOpen = () => ({
  type: types.SET_IS_CARDS_OPEN,
});
export const setCurrentReward = (value: string): currentRewardAction => ({
  type: types.SET_CURRENT_REWARD,
  payload: value,
});
