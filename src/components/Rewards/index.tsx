import "./styles.css";
import React from "react";
import rewards from "../../json/rewards.json";
import { useSelector } from "react-redux";
import {RootState} from '../../redux/reducers';

const Rewards = () => {
  const currentQuestionPage = useSelector((state:RootState) => state.currentQuestionPage);
  return (
    <section className="rewards">
      <ul className="rewards-list animate__animated animate__bounceInDown">
        {rewards.map((rew) => (
          <li
            key={rew.id}
            className={`rewards-item ${
              rew.id === currentQuestionPage
                ? "rewards-item--current"
                : rew.id < currentQuestionPage
                ? "rewards-item--prev"
                : ""
            }`}
          >
            <svg
              className="rewards-block"
              width="240"
              height="32"
              viewBox="0 0 240 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="rewardsBorder"
                d="M13.5303 3.70404C15.6719 1.64809 18.5256 0.5 21.4944 0.5H218.506C221.474 0.5 224.328 1.64809 226.47 3.70404L239.278 16L226.47 28.296C224.328 30.3519 221.474 31.5 218.506 31.5H21.4944C18.5256 31.5 15.6719 30.3519 13.5303 28.296L0.721988 16L13.5303 3.70404Z"
                fill="white"
                stroke="#D0D0D8"
              />
            </svg>
            <span className="rewards-reward">${rew.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rewards;
