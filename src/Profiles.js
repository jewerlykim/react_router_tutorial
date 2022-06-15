import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import RouterHookSample from "./RouterHookSample";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) =>
              isActive ? { background: "black", color: "white" } : undefined
            }
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={(isActive) =>
              isActive ? { background: "black", color: "white" } : undefined
            }
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
      <RouterHookSample />
    </div>
  );
};

export default Profiles;
