import React, { useState } from "react";
import "./style.css";
import AttendencsCard from "../../../components/AttendencsCard";
import { FcPieChart } from "react-icons/fc";
import { FaRegClock } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";

const attendenceData = [
  {
    id: 1,
    date: "",
    attendenceVisual: "",
    effectiveHr: "",
    effectGss: "",
    extraHr: "",
    arrivel: "",
    log: "",
  },
  {
    id: 2,
    date: "",
    attendenceVisual: "",
    effectiveHr: "",
    effectGss: "",
    extraHr: "",
    arrivel: "",
    log: "",
  },
];

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
      <h4>
        My Space / <span>Attendence</span>
      </h4>
      <div className="attendence">
        <div className="status">
          <p>Attendence Status</p>
          <p>
            <select name="dropwodn" id="selectItems">
              <option value="lastweek"> Last Week</option>
              <option value="firstweek"> first week</option>
            </select>
          </p>
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
        <div className="Timings">
          <p>Timings</p>
          <p>
            <button>M</button>
            <button>T</button>
            <button>W</button>
            <button>T</button>
            <button>F</button>
            <button>S</button>
            <button>S</button>
          </p>
          <AttendencsCard>
            <div className="">
              <div>
                <b>Today (9.30am to 6.30pm)</b>
              </div>
              <div>
                <span>Today 9am to 6pm</span>
              </div>
            </div>
          </AttendencsCard>
        </div>
        <div className="action">
          <p>Action</p>
          <br />
          <br />
          <div className="action--div">
            <AttendencsCard>
              <div className="">
                <div>
                  <b>Today (9.30am to 6.30pm)</b>
                </div>
                <div>
                  <span>Today 9am to 6pm</span>
                </div>
              </div>
            </AttendencsCard>
            <div className="action--btn">
              <button>Leave Request </button>
              <button>Work From Home </button>
            </div>
          </div>
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
        <div id="table--header">
          {/* <div> */}
          <b>December 2024</b>
          {/* </div> */}
          <div className="table--btn">
            <button>30 days</button>
            <button>Nov</button>
            <button>Oct</button>
            <button>Sep</button>
            <button>Aug</button>
            <button>Jul</button>
            <button>Jun</button>
          </div>
          <div className="table--btn--info">
            <button>
              <IoReorderThreeOutline size={"30px"} />
            </button>
            <button>
              <CiCalendar size={"30px"} />
            </button>
          </div>
        </div>
        {isLoginActive ? (
          <table>
            <tbody>
              <tr></tr>
              <tr>
                <th>Date</th>
                <th>Attendance Visual</th>
                <th>Effect Hours</th>
                <th>Gross Hours</th>
                <th>Extra Hours</th>
                <th>Arrivel Hpours</th>
                <th>Log</th>
              </tr>
              {attendenceData?.map((items)=>(
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              ))}
            </tbody>
          </table>
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
