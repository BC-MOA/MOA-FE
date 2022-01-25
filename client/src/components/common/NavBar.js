import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { v1 as uuid } from "uuid";
const navList = [
  { name: "홈", link: "/home", srcName: "home" },
  { name: "모으기", link: "/gather", srcName: "gather" },
  { name: "챌린지", link: "/compete", srcName: "compete" },
  { name: "프로필", link: "/profile", srcName: "profile" },
];
function NavBar() {
  const { pathname } = useLocation();
  return (
    <NavBarBox>
      {navList.map((item, index) => {
        return (
          <NavLink
            key={uuid()}
            to={item.link}
            className="navItem"
            name={item.srcName}
          >
            <img
              src={
                item.link === pathname
                  ? require(`assets/ic_nav_${item.srcName}_active.svg`)
                  : require(`assets/ic_nav_${item.srcName}.svg`)
              }
              alt={item.name}
            />
            <div>{item.name}</div>
          </NavLink>
        );
      })}
    </NavBarBox>
  );
}

const NavBarBox = styled.div`
  margin: 0 -20px -8px;
  height: 49px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  .navItem {
    width: 69px;
    font-family: "Pretendard-semibold";
    font-weight: 600;
    font-size: 12px;
    line-height: 19px;
    text-decoration: none;
    color: var(--Line_01);
    &.active {
      color: var(--a2);
    }
  }
`;
export default NavBar;
