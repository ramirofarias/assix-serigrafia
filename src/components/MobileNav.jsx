import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Typography } from "@material-ui/core";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #232323;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "30%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-300%")};
`;
const Menu = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: white;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  color: white;
  justify-self: flex-end;
  padding: 2rem;
`;
const Link = styled(LinkR)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #e9e9e9;
  cursor: pointer;

  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
const MobileNav = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <CloseButton onClick={toggle}>
        <FaTimes />
      </CloseButton>
      <Menu onClick={toggle}>
        <Link to="canal">
          <Typography variant="h1">El Canal</Typography>
        </Link>
        <Link to="videos">
          <Typography variant="h1">Últimos Videos</Typography>
        </Link>
        <Link to="comunidad">
          <Typography variant="h1">Comunidad</Typography>
        </Link>
      </Menu>
    </Container>
  );
};

export default MobileNav;
