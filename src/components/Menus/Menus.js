import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SiNetflix } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";
import {
  GiNinjaHeroicStance,
  GiGhost,
  GiSawedOffShotgun,
  GiRomanToga,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";

import styled from "styled-components";
import MenuItem from "./MenuItem";
const Menus = (props) => {
  return (
    <MenusPane>
      <MenuItem name="Netflix" Icon={SiNetflix} to="netflix" />
      <MenuItem name="Trending" Icon={FiTrendingUp} to="trending" />
      <MenuItem name="Top rated" Icon={AiFillStar} to="toprated" />
      <MenuItem name="Action Movies" Icon={GiNinjaHeroicStance} to="action" />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedy" />
      <MenuItem name="Horror Movies" Icon={GiGhost} to="horror" />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romance" />
      <MenuItem name="War Movies" Icon={GiSawedOffShotgun} to="war" />
    </MenusPane>
  );
};

export default Menus;

const MenusPane = styled.div`
  position: fixed;
  left: 1%;
  top: 20%;
  width: 46px;
  padding: 4px;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.5);
  }
  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .icon {
      font-size: 30px;
      margin-right: 8px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: var(--color-white);
      }
    }
  }
`;
