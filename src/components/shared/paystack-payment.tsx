import React from 'react';
import { PaystackButton } from 'react-paystack';
import styled from 'styled-components';

interface PaystackPaymentProps {
  amount: number;
  email: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
}

const PaymentButton = styled(PaystackButton)`
  background-color: var(--color-primary);
  color: white;
`;

const PaystackPayment: React.FC<PaystackPaymentProps> = ({
  amount,
  email,
  onSuccess,
  onClose
}) => {
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack works with the smallest currency unit
    publicKey: 'pk_test_80c5a27197ed75c09cb78fea05f9bfd23a53bc4f',
    currency: 'GHS' // Default currency set to Ghanaian Cedi
  };

  const handleSuccess = (reference: any) => {
    onSuccess(reference);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <PaymentButton
      {...config}
      text="Donate Now"
      onSuccess={handleSuccess}
      onClose={handleClose}
    />
  );
};

export default PaystackPayment;
