import React, { FunctionComponent, useRef, useState, MouseEvent } from "react";
import "./styles.css";
import Task from "../Task";
import Rewards from "../Rewards";

const PlayPage: FunctionComponent = () => {
  const rewardsList: any | null = useRef(null);
  const [isRewardsMenuOpen, setIsRewardsMenuOpen] = useState<boolean>(false);

  const turnIt = (e: MouseEvent) => {
    if (rewardsList.current.classList.contains("db")) {
      setIsRewardsMenuOpen(!isRewardsMenuOpen);
      return rewardsList.current.classList.remove("db");
    }
    setIsRewardsMenuOpen(!isRewardsMenuOpen);
    rewardsList.current.classList.add("db");
  };
  return (
    <section className="play">
      <div className="play-task__lg">
        <svg
          onClick={turnIt}
          className="play-menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isRewardsMenuOpen ? (
            <path
              d="M18.364 7.05025C18.7545 6.65972 18.7545 6.02656 18.364 5.63603C17.9734 5.24551 17.3403 5.24551 16.9497 5.63603L12 10.5858L7.05026 5.63606C6.65974 5.24554 6.02657 5.24554 5.63605 5.63606C5.24553 6.02659 5.24553 6.65975 5.63605 7.05028L10.5858 12L5.63603 16.9497C5.24551 17.3403 5.24551 17.9734 5.63603 18.364C6.02656 18.7545 6.65972 18.7545 7.05025 18.364L12 13.4142L16.9498 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9735 18.7545 17.3403 18.364 16.9498L13.4142 12L18.364 7.05025Z"
              fill="#1C1C21"
            />
          ) : (
            <>
              <path
                d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
                fill="#1C1C21"
              />
              <path
                d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                fill="#1C1C21"
              />
              <path
                d="M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z"
                fill="#1C1C21"
              />
            </>
          )}
        </svg>

        <Task />
      </div>
      <div ref={rewardsList} className="play-rewards__lg">
        <Rewards />
      </div>
    </section>
  );
};
export default PlayPage;
