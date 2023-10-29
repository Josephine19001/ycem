import React, { useRef } from "react";
import styled from "styled-components";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from "usehooks-ts";

import ContactForm from "./contact-form";
import { FlexContainerRowSpaceBetween } from "./containers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`;
const Modal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  background-color: var(--color-primary-transparent);
  padding: 50px;
  width: 50%;
  left: 25%;
  top: 15%;
  position: relative;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
    left: 0;
    top: 0;
  }
  form {
    width: 100% !important;
  }
  h2 {
    font-weight: 600;
  }
`;

const ContactFormModal = ({
  open,
  email,
  handleCloseModal,
}: {
  open: boolean;
  email: string;
  handleCloseModal: () => void;
}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, handleCloseModal);

  return (
    <Overlay>
      <Modal ref={ref}>
        <FlexContainerRowSpaceBetween style={{ width: "100%" }}>
          <h2>Let&apos;s have chat!</h2>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            style={{ cursor: "pointer" }}
            onClick={handleCloseModal}
          />
        </FlexContainerRowSpaceBetween>
        <ContactForm
          email={email}
          isUsingInModal={open}
          handleCancel={handleCloseModal}
        />
      </Modal>
    </Overlay>
  );
};

export default ContactFormModal;
