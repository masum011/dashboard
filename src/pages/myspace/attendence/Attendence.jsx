import React, { useState } from "react";
import "./style.css";
import AttendencsCard from "../../../components/AttendencsCard";
import { FcPieChart } from "react-icons/fc";
import { FaRegClock } from "react-icons/fa";
export default function Attendence() {
  const [isLoginActive, setLoginActive] = useState(true);
  const [isRequestsActive, setRequestsActive] = useState(false);

  const handleLoginClick = () => {
    setLoginActive(!isLoginActive);
    setRequestsActive(false);
  };

  const handleRequestsClick = () => {
    setRequestsActive(!isRequestsActive);
    setLoginActive(false);
  };
  return (
    <div>
      <h4>My Space / Attendence</h4>
      <div className="attendence">
        <div className="status">
          <p>Attendence Status</p>
          <p>Last Week</p>
          <AttendencsCard>
            <div className="attendence--inner">
              <div className="inner">
                <span>
                  <FaRegClock size={"30px"} />
                </span>
                <div>
                  <span>Avrag / Hr / day</span>
                  <span>(03,23,112)</span>
                </div>
              </div>
              <div className="inner">
                <span>
                  <FcPieChart size={"35px"} />
                </span>
                <div>
                  <span>On Times Arivel</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </AttendencsCard>
        </div>
        <div className="times">
          <p>Times</p>
        </div>
        <div className="action">
          <p>Action</p>
        </div>
      </div>
      <h4>Login & Requests</h4>
      <div className="attendence--log">
        <h5
          className={isLoginActive ? "active" : ""}
          onClick={handleLoginClick}
        >
          Attendence Login
        </h5>
        <h5
          className={isRequestsActive ? "active" : ""}
          onClick={handleRequestsClick}
        >
          Attendence Requests
        </h5>
      </div>
      <div className="attendence--calendar">
        {isLoginActive ? (
          <div>
            <h2>Attendence log</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officia in, non debitis aliquam hic. Consequuntur vel autem nihil,
            aliquid eos cupiditate omnis tempore ea explicabo ipsum. Commodi,
            maiores dolores.
          </div>
        ) : (
          <div>
            <h2>Attendence resqueted</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dignissimos velit distinctio sapiente facilis eaque harum officia
              itaque dolores atque! Sequi itaque perferendis explicabo quasi
              voluptas omnis labore recusandae iure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
