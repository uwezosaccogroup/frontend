import React from "react";
import { Accordion } from "semantic-ui-react";

const faqData = [
  {
    title: "What fees are associated with withdrawals from my savings account?",
    content:
      "We do not charge fees for withdrawals from our savings accounts. However, if you make more than a certain number of withdrawals in a month, you may be subject to an excess withdrawal fee. ",
  },
  {
    title: "Can I withdraw money from my savings account at any time?",
    content:
      "Yes, you can withdraw money from your savings account at any time. However, some types of accounts may have restrictions on the number of withdrawals you can make each month, so be sure to check the terms and conditions of your account.",
  },
  {
    title: "Is the app secure?",
    content:
      "Yes, the app is secure. We use industry-standard encryption and security protocols to protect your data and prevent unauthorized access to your account.",
  },
];

const Faqs = () => {
  return (
    <div id="section3">
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion
          defaultActiveIndex={0}
          panels={faqData.map((faq, index) => ({
            key: `faq-${index}`,
            title: faq.title,
            content: { content: <p>{faq.content}</p> },
          }))}
        />
      </div>
    </div>
  );
};

export default Faqs;
