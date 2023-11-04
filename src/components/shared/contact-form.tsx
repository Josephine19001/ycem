import React, { useRef, useState, useEffect } from "react";
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
  const [emailJsStatus, setEmailJsStatus] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

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
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        form.current || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID || ""
      );

      setFormData({
        firstName: "",
        secondName: "",
        email: "",
        message: "",
        phoneNumber: "",
        companyName: "",
      });

      setEmailJsStatus(response.status);

      console.log("--response", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 30000); // 30 seconds
  };

  const showError = () => {
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 30000); // 30 seconds
  };

  useEffect(() => {
    if (emailJsStatus === 200) {
      showSuccess();
    } else if (emailJsStatus === 400) {
      showError();
    }
  }, [emailJsStatus]);

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
      {showSuccessMessage && (
        <p style={{ color: "var(--color-success)" }}>
          Hi {formData.firstName}, your email was successfully sent! We will get
          back to you soon 😇
        </p>
      )}
      {showErrorMessage && (
        <p style={{ color: "var(--color-error)" }}>
          Something went wrong while sending the email. Try sending it manually
          as we look into it.
        </p>
      )}
    </FormContainer>
  );
};

export default ContactForm;
