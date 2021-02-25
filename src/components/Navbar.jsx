import React from "react";
import styled from "styled-components";
import assixLogo from "../pages/img/logo.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 1.5em;
  background-color: transparent;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>
          <img src={assixLogo} alt="Logo del canal"></img>
        </Logo>
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
