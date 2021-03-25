import { Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import assixLogo from "../pages/img/logo.png";
import { Link as LinkR } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

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
  width: 50px;
  height: 50px;
  padding: 1em;
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

  @media screen and (orientation: portrait) {
    display: none;
  }
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

  &.active{
    border-bottom: 3px solid black;
  }
  }

`;

const MenuButton = styled.div`
  display: none;
  @media screen and (orientation: portrait) {
    display: block;
    grid-column: 11/12;
    color: #e9e9e9;
    top: 0;
    right: 0;
    font-size: 3rem;
    cursor: pointer;
  }
`;

const Navbar = ({ toggle }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>
          <img src={assixLogo} alt="Logo del canal"></img>
        </Logo>
      </LogoContainer>
      <MenuButton onClick={toggle}>
        <BiMenuAltRight />
      </MenuButton>
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
