import NetflixLogo from "../../assets/image/logo.png";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import { useScrollY } from "../hooks";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [scrollY] = useScrollY();
  const [keywords, setKeywords] = useState("");
  const navigation = useNavigate();
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    keywords.length > 0
      ? navigation(`/search?keyword=${keywords.trim()}`)
      : navigation("/");
  };
  const goHome = () => {
    navigation("/");
    setKeywords("");
  };
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : {
              backgroundColor: "var(--color-background)",
            }
      }
    >
      <div className="navContainer">
        <div className="logo" onClick={goHome}>
          <img src={NetflixLogo} alt="" />
        </div>
        <div className="navSearch">
          <MdSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, genres, people"
            onChange={handleChangeInput}
            value={keywords}
          />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 100%;
    @media only screen and (max-width: 728px) {
      flex-direction: column;
    }
    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: 1px solid #fff;
        color: var(--color-white);
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background: var(--color-background);
        transition: ease-in 0.5s;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 5px;
        }
      }
    }
  }
`;
