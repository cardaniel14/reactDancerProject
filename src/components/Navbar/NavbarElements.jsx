import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  background: black;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  @media only screen and (min-width: 768px) and (max-width: 1040px) {
    padding: 30px;
  }
`;

export const NavLink = styled(Link)`
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;
  &:hover,
  &.active {
    color: #e1dad3;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavClose = styled(FaTimes)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 70px;
    right: 0;
    width: 250px;
    background: black;
    transition: all 1s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
  }
`;
