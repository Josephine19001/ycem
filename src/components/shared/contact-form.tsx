import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FlexContainerRowSpaceBetween } from "../shared/containers";
import { ButtonPrimary } from "../shared/buttons";

interface FormData {
  firstName: string;
  secondName: string;
  email: string;
  message: string;
  phoneNumber: string;
  companyName: string;
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 40%;

  input {
    width: 100%;
    height: 48px;
    padding: 10px 12px;
  }
  textarea {
    width: 100%;
    height: 80px;
    padding: 10px 12px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactForm = ({
  email,
  isUsingInModal,
}: {
  email?: string;
  isUsingInModal?: boolean;
  handleCancel?: () => void;
}) => {
  const form = useRef(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    secondName: "",
    email: email || "",
    message: "",
    phoneNumber: "",
    companyName: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_I || "",
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID || "",
        form.current || "",
        process.env.REACT_APP_EMAIL_JS_PUBLIC_ID
      );

      // Clear the form after submission
      setFormData({
        firstName: "",
        secondName: "",
        email: "",
        message: "",
        phoneNumber: "",
        companyName: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <FormContainer ref={form} onSubmit={sendEmail}>
      <FlexContainerRowSpaceBetween style={{ width: "100%" }}>
        <input
          placeholder="First name"
          type="text"
          required
          value={formData.firstName}
          onChange={handleInputChange}
          name="firstName"
        />
        <input
          placeholder="Second name"
          type="text"
          required
          value={formData.secondName}
          onChange={handleInputChange}
          name="secondName"
        />
      </FlexContainerRowSpaceBetween>
      <input
        placeholder="Email"
        type="email"
        required
        value={formData.email}
        onChange={handleInputChange}
        name="email"
      />
      <input
        placeholder="Phone number"
        type="number"
        required
        value={formData.phoneNumber}
        onChange={handleInputChange}
        name="phoneNumber"
      />
      <textarea
        placeholder="How can we help you?"
        required
        value={formData.message}
        onChange={handleInputChange}
        name="message"
      />

      <div>
        <ButtonPrimary type="submit">Send</ButtonPrimary>
      </div>
    </FormContainer>
  );
};

export default ContactForm;
