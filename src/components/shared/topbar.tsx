import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useOnClickOutside } from "usehooks-ts";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoSVG from "public/ycem-logo.svg";
import NavLink from "./nav-link";
import { FlexContainerRowSpaceBetween } from "./containers";
import { navItems } from "./constants";

export const LogoComponent = () => {
  return (
    <Image priority src={LogoSVG} alt="YCEM logo" width={68} height={68} />
  );
};

interface NavigationProps {
  closeNav?: () => void;
}

export const Navigation = ({ closeNav }: NavigationProps) => (
  <>
    {navItems.map(({ href, label }) => (
      <Nav.Item key={label} onClick={closeNav}>
        <NavLink key={label} href={href} label={label} />
      </Nav.Item>
    ))}
  </>
);

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  const closeNav = () => setIsOpen(false);

  useOnClickOutside(ref, closeNav);

  return (
    <Nav.Header>
      <Nav.Wrapper>
        <Nav.Logo href="/">
          <LogoComponent />
        </Nav.Logo>
        <FlexContainerRowSpaceBetween style={{ gap: "30px" }}>
          <Nav.Items>
            <Navigation />
          </Nav.Items>
        </FlexContainerRowSpaceBetween>

        <Nav.MobileNav ref={ref}>
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            size="2x"
            style={{ color: "var(--color-light)",zIndex: '5' }}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Nav.Overlay open={isOpen}>
            <Nav.OverlayedItems open={isOpen}>
              <Navigation closeNav={closeNav} />
            </Nav.OverlayedItems>
          </Nav.Overlay>
        </Nav.MobileNav>
      </Nav.Wrapper>
    </Nav.Header>
  );
};

export default TopBar;

//Styled components
const Nav = {
  Header: styled.header`
    background-color: var(--color-primary);
    width: 100%;
    padding: 10px 195px;
    position: fixed;
    @media (max-width: 768px) {
      padding: 4px 24px;
    }
    z-index: 2;
  `,
  Wrapper: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-light);
  `,
  Items: styled.ul`
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    @media (max-width: 768px) {
      display: none;
    }
  `,
  Logo: styled.a`
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  `,
  ContactBtnContainer: styled.div`
    @media (max-width: 768px) {
      display: none;
    }
  `,
  ContactBtnSmallContainer: styled.div`
    @media (max-width: 768px) {
      margin-top: auto;
      margin-bottom: 90px;
      margin-left: 24px;
      margin-right: 24px;
    }
  `,
  Item: styled.li`
    font-weight: 600;
    font-size: 15px;
  `,
  MobileNav: styled.div`
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  `,
  Button: styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
  `,
  Overlay: styled.div<{ open: boolean }>`
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    height: ${({ open }) => (open ? "100%" : 0)};
    width: 100%;
    transition: height 0.2s ease-in-out;
    background: var(--color-primary);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `,
  OverlayedItems: styled.ul<{ open: boolean }>`
    display: ${({ open }) => (open ? "block" : "none")};
    list-style: none;
    position: fixed;
    overflow: hidden;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0 24px;
    }

    h4 {
      opacity: ${({ open }) => (open ? 1 : 0)};
    }
    li {
      opacity: ${({ open }) => (open ? 1 : 0)};
      transition: opacity 0.4s ease-in-out;
      font-size: 18px;
      margin: 50px 0px;
      color: var(--color-light);
    }
    a {
      color: var(--color-light);
      transition: color 200ms ease;
      font-size: 18px;
      line-height: 1.067em;
      text-decoration: none;
    }
  `,
};