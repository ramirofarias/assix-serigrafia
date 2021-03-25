import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import assixLogo from "../pages/img/logo.png";
import { Link as LinkR } from "react-router-dom";

const NavbarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: transparent;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-left: 1em;
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;
  padding: 0.5em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  grid-column: 8/12; ;
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
  width: auto;
  margin-right: 2em;
`;

const Link = styled(LinkR)`
  text-decoration: none;
  color: inherit;
  position: relative;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  :hover {
    ::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
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
            <Link to="canal">
              <Typography variant="subtitle2">El canal</Typography>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="videos">
              <Typography variant="subtitle2">Últimos videos</Typography>
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="comunidad">
              <Typography variant="subtitle2">Comunidad</Typography>
            </Link>
          </LinkItem>
        </LinksWrapper>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
