import React, { useState } from 'react';
import styled from 'styled-components';
import DonationPageTemplate from './donation-page-template';
import {
  FlexContainerColumnGapped,
  FlexContainerRowSpaceBetween
} from '../shared/containers';
import { ButtonPrimary, ButtonSecondary } from '../shared/buttons';
import PaystackPayment from '../shared/paystack-payment';
import ThankYouModal from '../shared/thankyou-modal';
import { useRouter } from 'next/router';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.h2``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--color-primary);
    color: white;
  }
`;

const MakeADifference: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();

  const handleDonateClick = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = (reference: any) => {
    console.log('Payment successful!', reference);
    setShowPayment(false);
    setModalIsOpen(true);
  };

  const handlePaymentClose = () => {
    console.log('Payment dialog closed');
    setShowPayment(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <DonationPageTemplate>
      <>
        <ContentWrapper>
          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>Our mission</Header>
            <p>
              At YCEM, we are dedicated to inspiring and educating young
              individuals, particularly girls, about the opportunities and
              importance of pursuing engineering. Our vision is to empower the
              next generation to embrace engineering careers with passion and
              confidence, breaking down barriers and stereotypes in the field.
            </p>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>The Need</Header>
            <p>
              In many communities, especially among young girls, there is a lack
              of awareness and encouragement to pursue careers in engineering.
              This is why we are launching our &apos;Inspire Future
              Engineers&apos; campaign, aimed at visiting schools, dispelling
              stereotypes, promoting technology, and fostering a love for
              engineering in young minds.
            </p>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>Where Your Donation Goes</Header>
            <p>
              Your generous donation will go towards organizing school visits,
              creating engaging educational materials, hosting interactive
              workshops and sponsoring a minimum of 2 brilliant but needy
              students to pursue engineering in tertiary. For example, a{' '}
              <strong>GHC500</strong> donation can provide a classroom with
              hands-on engineering kits, <strong>GHC1000</strong> can fund a
              school visit from an industry expert, and <strong>GHC5000</strong>{' '}
              can support a large-scale workshop that reaches hundreds of
              students.
            </p>
            <ButtonSecondary
              onClick={() => router.push('/support-us/empower-her/students')}
            >
              Students
            </ButtonSecondary>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>Impact</Header>
            <p>
              By donating, you will help us inspire and educate future
              engineers. For instance, past internal contributions from our team
              have enabled us to reach over 70 students in the past year, with
              many girls expressing newfound interest and confidence in pursuing
              engineering careers. Your support will create more success stories
              and bring us closer to a diverse and innovative engineering
              workforce.
            </p>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>How to Donate</Header>
            <p>
              To make a donation, simply click the &apos;Donate Now&apos; button
              below, fill out the donation form, and choose your preferred
              payment method via Paystack.
            </p>
            <FlexContainerRowSpaceBetween>
              {showPayment ? (
                <PaystackPayment
                  amount={1000} // Example amount
                  email="donor@example.com" // Example email
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentClose}
                />
              ) : (
                <ButtonPrimary onClick={handleDonateClick}>
                  Donate Now
                </ButtonPrimary>
              )}
            </FlexContainerRowSpaceBetween>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>
              Budget for an Undergraduate Engineering Student in Ghana
            </Header>
            <p>
              This budget is done with the assumption that an academic year
              contains 9 months.
            </p>

            <Table>
              <thead>
                <tr>
                  <th>Expense Category</th>
                  <th>Estimated Cost (GHS)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}>
                    <strong>Tuition and Accommodation</strong>
                  </td>
                </tr>
                <tr>
                  <td>Tuition</td>
                  <td>3500</td>
                </tr>
                <tr>
                  <td>Residential fees</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>7500</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <strong>Books and Academic Supplies</strong>
                  </td>
                </tr>
                <tr>
                  <td>Textbooks</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>Notebooks, Stationery</td>
                  <td>600</td>
                </tr>
                <tr>
                  <td>Laboratory Equipment</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>2100</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <strong>Personal Items</strong>
                  </td>
                </tr>
                <tr>
                  <td>Food and Groceries</td>
                  <td>3600</td>
                </tr>
                <tr>
                  <td>Transportation</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>Personal Care Items</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Medical Expenses</td>
                  <td>400</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>5400</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <strong>Miscellaneous</strong>
                  </td>
                </tr>
                <tr>
                  <td>Internet and Phone bills</td>
                  <td>900</td>
                </tr>
                <tr>
                  <td>Printing and Photocopying</td>
                  <td>200</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>1100</strong>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <strong>Summary of Costs</strong>
                  </td>
                </tr>
                <tr>
                  <td>Tuition and Accommodation</td>
                  <td>7500</td>
                </tr>
                <tr>
                  <td>Books and Academic Supplies</td>
                  <td>2100</td>
                </tr>
                <tr>
                  <td>Personal Items</td>
                  <td>5400</td>
                </tr>
                <tr>
                  <td>Miscellaneous</td>
                  <td>1100</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>16,100</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </FlexContainerColumnGapped>

          <FlexContainerColumnGapped $alignitems="flex-start">
            <Header>Share our Campaign</Header>
            <p>
              Help us spread the word! Share our campaign on social media and
              use the hashtag{' '}
              <i>
                #InspireFutureEngineers. Thank you for your support! Together,
                we can make a lasting impact on the future of engineering.{' '}
              </i>
            </p>
          </FlexContainerColumnGapped>
        </ContentWrapper>

        <ThankYouModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </>
    </DonationPageTemplate>
  );
};

export default MakeADifference;
