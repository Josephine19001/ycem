import React from "react";
import { ButtonPrimary } from "./buttons";
import { useRouter } from "next/router";

function ContactButton() {
  const router = useRouter();
  return (
    <ButtonPrimary onClick={() => router.push("/contact")}>
      Consult with a specialist
    </ButtonPrimary>
  );
}

export default ContactButton;
