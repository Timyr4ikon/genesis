export const SET_CURRENT_QUESTION_PAGE = "SET_CURRENT_QUESTION_PAGE";
export const SET_DATA = "SET_DATA";
export const RESET_CURRENT_QUESTION_PAGE = "RESET_CURRENT_QUESTION_PAGE";
export const SET_IS_CARDS_OPEN = "SET_IS_CARDS_OPEN";
export const TURN_REWARDS_MENU = "TURN_REWARDS_MENU";
export const SET_CURRENT_REWARD = "SET_CURRENT_REWARD";
export interface Data {
    id : number;
    title: string;
    variants: DataObj[];
  }
export interface DataObj {
  id: number;
  variant: string;
  answer: string;
  type: boolean;
}
export interface DataAction {
  type: typeof SET_DATA,
  payload: Data ;
}
export interface currentQuestionPageActionSet {
  type: typeof SET_CURRENT_QUESTION_PAGE;
}
export interface currentQuestionPageActionReset {
  type: typeof RESET_CURRENT_QUESTION_PAGE;
}
export type currentQuestionPageActions =
  | currentQuestionPageActionReset
  | currentQuestionPageActionSet;
export interface isCardsOpenAction {
  type: typeof SET_IS_CARDS_OPEN;
}
export interface currentRewardAction {
  type: typeof SET_CURRENT_REWARD;
  payload: string;
}
