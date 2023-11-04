import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import IntroSection from "../shared/intro-section";
import { Section } from "../shared/containers";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InPageNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 64px;
  gap: 20px;
`;

const InpageNavItem = styled.a<{ active?: boolean }>`
  cursor: pointer;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 30px;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease 0s, left 0.3s ease;
  }
`;

const InpageNav = ({ children }: { children: JSX.Element }) => {
  const router = useRouter();

  return (
    <div>
      <IntroSection
        title="Our Events"
        subTitle="Explore the latest engineering trends, receive expert guidance, and unleash your engineering creativity at our events."
      />

      <NavContainer>
        <InPageNav>
          <li>
            <InpageNavItem
              href="/events/upcoming-events"
              active={router.asPath === "/events/upcoming-events" || false}
            >
              Upcoming events
            </InpageNavItem>
          </li>
          {/* <li>
            <InpageNavItem
              href="/events/past-events"
              active={router.asPath === "/events/past-events" || false}
            >
              Past events
            </InpageNavItem>
          </li> */}
        </InPageNav>
      </NavContainer>
      <Section style={{ marginTop: "50px" }}>{children}</Section>
    </div>
  );
};

export default InpageNav;
