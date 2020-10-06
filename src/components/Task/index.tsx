import React, { useEffect } from "react";
import "./styles.css";
import TaskItem from "../TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  setCurrentQuestionPage,
  setData,
  resetCurrentQuestionPage,
  setIsCardsOpen,
  setCurrentReward,
} from "../../redux/actions";
import data from "../../json/data.json";
import rewards from "../../json/rewards.json";
import { RootState } from "../../redux/reducers";
import { Data } from "../../redux/types";

const Task = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentQuestionPage: number = useSelector(
    (state: RootState) => state.currentQuestionPage
  );
  const currentQuestionData: Data = useSelector(
    (state: RootState) => state.data
  );
  const isCardsOpen: boolean = useSelector(
    (state: RootState) => state.isCardsOpen
  );

  useEffect(() => {
    if (currentQuestionPage > 0) {
      dispatch(setCurrentReward(rewards[currentQuestionPage - 1].value));
    }
    const idx = data[currentQuestionPage];
    dispatch(setData(idx));
  }, [dispatch, currentQuestionPage]);

  const onOpenCards = (e: any) :void => {
    if (!isCardsOpen) {
      dispatch(setIsCardsOpen());
      if (JSON.parse(e.currentTarget.dataset.type)) {
        if (currentQuestionPage === data.length - 1) {
          dispatch(setIsCardsOpen());
          dispatch(resetCurrentQuestionPage());
          return history.replace("/finish");
        } else {
          setTimeout(() => {
            dispatch(setIsCardsOpen());
            dispatch(setCurrentQuestionPage());
          }, 3000);
        }
      } else {
        e.currentTarget.classList.add("task-item--uncorrect");
        setTimeout(() => {
          dispatch(setIsCardsOpen());
          dispatch(resetCurrentQuestionPage());
          return history.replace("/finish");
        }, 3000);
      }
    }
  };
  return (
    <>
      <h1 className="task-title">{currentQuestionData.title}</h1>
      <ul className="task-list">
        {currentQuestionData.variants &&
          currentQuestionData.variants.map((variant) => (
            <TaskItem
              key={variant.id}
              variant={variant.variant}
              answer={variant.answer}
              type={variant.type}
              onOpenCards={onOpenCards}
              isCardsOpen={isCardsOpen}
            />
          ))}
      </ul>
    </>
  );
};

export default Task;
