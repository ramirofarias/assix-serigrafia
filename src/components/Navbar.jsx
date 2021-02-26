import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import assixLogo from "../pages/img/logo.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 1em 1.5em;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
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

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  margin: 1em;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>
          <img src={assixLogo} alt="Logo del canal"></img>
        </Logo>
      </LogoContainer>
      <LinksContainer>
        <LinksWrapper
          style={{
            marginRight: matches ? "6rem" : 0,
          }}
        >
          <LinkItem>
            <Link href="#">
              <Typography variant="subtitle2">El canal</Typography>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">
              <Typography variant="subtitle2">Últimos videos</Typography>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">
              <Typography variant="subtitle2">Comunidad</Typography>
            </Link>
          </LinkItem>
        </LinksWrapper>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
