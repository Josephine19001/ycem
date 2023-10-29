import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnClickOutside } from "usehooks-ts";

import { LinkButton } from "./buttons";
import useSmallerScreens from "../../hooks/use-smaller-screens";

interface Props {
  label: string;
  href: string;
  dropDownMenu?: { [key: string]: string }[];
}

export const Link = styled.a<{ active?: boolean }>`
  color: var(
    ${(props) => (props.active ? "--color-primary-darker" : "--color-primary")}
  );
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 30px;
    bottom: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background: var(--color-primary-darker);
    transition: width 0.3s ease 0s, left 0.3s ease;
  }
  &:active {
    color: var(--color-primary-darker);
  }
  &:active::after {
    width: 100%;
  }
  &:hover::after {
    width: 100%;
  }
`;

const DropDownButton = styled.div`
  @media (max-width: 768px) {
    position: relative;
  }
`;

const DropdownMenuContainer = styled.div`
  z-index: 10;
  margin-top: 12px;
  position: absolute;

  a {
    background: var(--bg-color-light);
    height: 60px;
    width: 150px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-color);
    font-size: 15px;
    &:hover {
      background: var(--color-primary);
      cursor: pointer;
      width: 100%;
      height: 60px;
    }
  }

  @media (max-width: 768px) {
    color: var(--text-color);
    transition: color 200ms ease;
    font-size: 18px;
    z-index: 1;
    width: 100%;
    left: 0;
    a {
      width: 100%;
    }
  }
`;

const DropDownMenuHeader = styled.p<{
  isOpen?: boolean;
  active?: boolean;
}>`
  font-weight: 600;
  font-size: 15px;
  color: var(
    ${({ isOpen, active }) =>
      isOpen || active ? `--color-primary` : "--color-secondary"}
  );
  text-transform: capitalize;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    color: var(--text-color);
    transition: color 200ms ease;
    font-size: 18px;
    line-height: 1.067em;
  }
`;

const NavLink = ({ label, href, dropDownMenu }: Props) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef = useRef(null);
  const isSmallerScreen = useSmallerScreens();

  const toggleDropdownMenu = () => setIsOpen((prev) => !prev);
  const closeDropdownMenu = () => {
    setIsOpen(false);
  };

  const handleLMenuLinkClick = (
    event: React.MouseEvent,
    subMenuLink: string
  ) => {
    event.preventDefault();
    router.push(subMenuLink);
    closeDropdownMenu();
  };
  const handleLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(href);
  };

  useOnClickOutside(subMenuRef, closeDropdownMenu);

  const hasDropdown = dropDownMenu && dropDownMenu.length;

  const renderChevronIcon = () => {
    if (!isSmallerScreen) {
      return faChevronDown;
    }

    return !isOpen ? faChevronDown : faChevronRight;
  };

  const isDropdownLinkActive =
    dropDownMenu?.some((subMenu) => router.asPath === subMenu.href) || false;

  return hasDropdown ? (
    <DropDownButton ref={subMenuRef}>
      <DropDownMenuHeader
        onClick={toggleDropdownMenu}
        isOpen={isOpen}
        active={isDropdownLinkActive}
      >
        {label}
        {hasDropdown && (
          <span>
            <FontAwesomeIcon icon={renderChevronIcon()} />
          </span>
        )}
      </DropDownMenuHeader>
      {isOpen && (
        <DropdownMenuContainer>
          {dropDownMenu?.map((subMenu) => (
            <a
              key={subMenu.label}
              href={subMenu.href}
              onClick={(event) => handleLMenuLinkClick(event, subMenu.href)}
            >
              {subMenu.label}
            </a>
          ))}
        </DropdownMenuContainer>
      )}
    </DropDownButton>
  ) : (
    <Link
      href={href}
      onClick={handleLinkClick}
      active={router.asPath === href || false}
    >
      {label}
    </Link>
  );
};

export const ButtonLink = ({ label, href }: Props) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <LinkButton href={href} onClick={handleClick}>
      {label}
    </LinkButton>
  );
};

export default NavLink;
