import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

import { MdEmail } from "react-icons/md";
import "./style.css";
export default function Rootlayout() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div id="root--layout">
      <Sidebar id="pro-sidebar">
        <Menu>
          <div className="logo--contaner">
            <div className="logo--div">
              <p id="logo">KDISP</p>
              <p>Netflix & Youtube</p>
            </div>
          </div>
          <hr />
          <MenuItem
            icon={<IoHomeOutline />}
            onClick={() => navigate("/")}
            active={location.pathname === "/"}
          >
            Home
          </MenuItem>
          <SubMenu
            label="My Space"
            icon={<IoStatsChartOutline />}
            active={location.pathname === ""}
          >
            <MenuItem> Levea </MenuItem>
            <MenuItem
              onClick={() => navigate("attendance")}
              active={location.pathname === "attendance"}
            >
              Attendence
            </MenuItem>
            <MenuItem> Perpomance </MenuItem>
            <MenuItem> Expenses & Travel </MenuItem>
            <MenuItem> Help Desk </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div className="page--contaner">
        <div className="header--div">
          <header>
            <div className="input--filed">
              <input type="text" placeholder="Search..." />
              
                <CiSearch size={"20px"} id="search-icon"/>
             
            </div>
            <div className="icon--div">
              <span></span>
              <IoMdNotifications />
            </div>
            <div className="icon--div">
              <span></span>
              <MdEmail />
            </div>
            <div className="icon--div">
              <CgDarkMode size={"40px"} />
            </div>

            <div className="user--avtar">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
          </header>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
