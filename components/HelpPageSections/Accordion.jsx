"use client";
import { useState } from "react";

export default function Accordion() {
  const [openItem, setOpenItem] = useState("what-is-marginplus");
  const [activeTab, setActiveTab] = useState("general");

  const faqData = {
    general: [
      {
        id: "what-is-marginplus",
        question: "Who is Marginplus?",
        answer:
          "Marginplus is a fintech platform that connects people to secure investment opportunities in agriculture across Africa, starting from Nigeria.",
      },
      {
        id: "how-does-investing-work",
        question: "How does investing with Marginplus work?",
        answer:
          "You choose a verified project, fund it through your wallet, and earn profit based on the agreed duration",
      },
      {
        id: "is-marginplus-licensed",
        question: "Is Marginplus licensed or registered?",
        answer:
          "Yes. We are legally registered and work with licensed partners to ensure compliance and secure transactions.",
      },
      {
        id: "is-my-money-safe",
        question: "Is my money safe with Marginplus?",
        answer:
          "Yes. We work only with vetted projects and manage your funds through regulated payment channels.",
      },
      {
        id: "asset-classes",
        question: "How can I contact Marginplus?",
        answer:
          "You can reach our support team via chat, email, or phone. We’re always ready to help.",
      },
    ],
    investments: [
      {
        id: "investment-wallet",
        question: "Do I need a wallet to invest?",
        answer:
          "Yes. Your Marginplus wallet is used to fund projects and receive your returns.",
      },
      {
        id: "investment-period",
        question: "How can I fund my wallet?",
        answer:
          "You can use bank transfers, debit cards, or your assigned static account.",
      },
      {
        id: "investment-minimum",
        question: "What’s the minimum amount I can invest?",
        answer:
          "You can start with as little as ₦20,000 depending on the minimum amount of each investment",
      },
      {
        id: "investment-profit",
        question: "How much profit can I make?",
        answer:
          "Returns range between 12% and 35%, depending on the project and its duration.",
      },
      {
        id: "investment-returns",
        question: "Where will my returns be paid?",
        answer:
          "Returns are paid directly into your Marginplus wallet. You can then withdraw to your bank.",
      },
      {
        id: "investment-withdraw",
        question: "Can I withdraw my money before the investment ends?",
        answer:
          "No. Each project has a fixed duration — 3, 6, or 12 months — and funds are locked until maturity.",
      },
      {
        id: "investment-types",
        question: "What types of investments do you offer?",
        answer:
          "We currently focus on agricultural investment portfolios, carefully managed and verified.",
      },
    ],
    raise: [
      {
        id: "fundraising-raise",
        question: "Who can raise funds on Marginplus?",
        answer:
          "We support agricultural businesses and cooperatives looking to scale through verified community-backed investments.",
      },
      {
        id: "fundraising-fees",
        question: "What are the requirements for raising funds?",
        answer: `<ul class="list-disc pl-5 space-y-2">
          <li>For businesses: You must be registered and have been operating for at least 2 years.</li>
          <li>For farmers: You need to be part of a cooperative. If you're not, contact us to help you join one near your location.</li>
        </ul>`,
      },
      {
        id: "fundraising-funds",
        question: "How do I apply for funding?",
        answer:
          "Go to the “Raise Funds” page and fill out your details. Our team will follow up with next steps.",
      },
      {
        id: "fundraising-interest",
        question: "Do I have to pay back with interest?",
        answer:
          "No. We use a profit-sharing model — no interest rates or hidden charges.",
      },
      {
        id: "fundraising-approval",
        question: "How long does the approval process take?",
        answer:
          "We typically review initial applications within 5–7 working days.",
      },
      {
        id: "fundraising-visible",
        question: "Will my farm be visible on the platform?",
        answer:
          "Yes. Once verified, your project will be made available for investment on the Marginplus platform.",
      },
    ],
  };

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setOpenItem(null); // Reset open accordion item when switching tabs
  };

  // Get current FAQ items based on active tab
  const currentFaqItems = faqData[activeTab] || [];

  // Icons(Arrow Up and Arrow Down)
  const ChevronDown = () => (
    <div className="h-5 w-5 flex items-center justify-center">
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  const ChevronUp = () => (
    <div className="h-5 w-5 flex items-center justify-center">
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-white w-full mt-10 mb-44">
      {/* Desktop layout */}
      <div className="hidden lg:flex lg:flex-row mt-12">
        {/* Left sidebar for desktop */}
        <div className="w-[312px] flex-shrink-0">
          <div className="border-t border-b border-[#00A85947]">
            <button
              onClick={() => switchTab("general")}
              className={`w-full font-semibold cursor-pointer text-lg text-center p-4 ${
                activeTab === "general"
                  ? "bg-[#008647] text-white"
                  : "bg-gray-100"
              }`}
            >
              <h2 className="font-semibold text-lg text-center">General</h2>
            </button>
          </div>
          <div className="border-b border-[#00A85947]">
            <button
              onClick={() => switchTab("investments")}
              className={`w-full font-semibold cursor-pointer text-lg text-center p-4 ${
                activeTab === "investments"
                  ? "bg-[#008647] text-white"
                  : "bg-gray-100"
              }`}
            >
              Investments
            </button>
          </div>
          <div className="border-b border-[#00A85947]">
            <button
              onClick={() => switchTab("raise")}
              className={`w-full font-semibold cursor-pointer text-lg text-center p-4 ${
                activeTab === "raise"
                  ? "bg-[#008647] text-white"
                  : "bg-gray-100"
              }`}
            >
              Raise
            </button>
          </div>
        </div>

        {/* Desktop content area */}
        <div className="flex-grow bg-[#F6F6F6] lg:pb-36">
          {/* FAQ content for desktop */}
          <div className="w-full">
            {currentFaqItems.map((item) => (
              <div key={item.id} className="border-b border-gray-300 mx-4">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full cursor-pointer pt-6 flex justify-between items-center text-left"
                >
                  <span className="text-[16px] font-bold">{item.question}</span>
                  {openItem === item.id ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openItem === item.id && (
                  <div className="pt-8 pb-5">
                    <p className="text-[16px]" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout - accordion style with nested content */}
      <div className="lg:hidden bg-[#F6F6F6]">
        {/* General section */}
        <div className="border-t border-b border-[#00A85947]">
          <button
            onClick={() => switchTab("general")}
            className={`w-full text-center text-lg font-semibold p-4 ${
              activeTab === "general" ? "bg-[#008647] text-white" : ""
            }`}
          >
            <h2 className="font-semibold">General</h2>
          </button>
        </div>
        <div className="mx-4">
          {activeTab === "general" && (
            <div className="my-10">
              {faqData.general.map((item) => (
                <div key={item.id} className="border-b border-gray-300">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full pt-4 pb-2 flex justify-between items-center text-left text-[16px] font-bold"
                  >
                    <span>{item.question}</span>
                    {openItem === item.id ? <ChevronUp /> : <ChevronDown />}
                  </button>

                  {openItem === item.id && (
                    <div className="py-4">
                      <p className="text-[16px]">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Investments section */}
        <div className="border-t border-b border-[#00A85947]">
          <button
            onClick={() => switchTab("investments")}
            className={`w-full text-center text-lg font-semibold p-4 ${
              activeTab === "investments" ? "bg-[#008647] text-white" : ""
            }`}
          >
            Investments
          </button>
          <div className="mx-4">
            {activeTab === "investments" && (
              <div className="my-10">
                {faqData.investments.map((item) => (
                  <div key={item.id} className="border-b border-gray-300">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 flex justify-between items-center text-left text-[16px] font-bold"
                    >
                      <span>{item.question}</span>
                      {openItem === item.id ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {openItem === item.id && (
                      <div className="py-4">
                        <p className="text-[16px]">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Raise section */}
        <div className="border-t border-b border-[#00A85947]">
          <button
            onClick={() => switchTab("raise")}
            className={`w-full text-center text-lg font-semibold p-4 ${
              activeTab === "raise" ? "bg-[#008647] text-white" : ""
            }`}
          >
            Raise
          </button>
          <div className="mx-4">
            {activeTab === "raise" && (
              <div className="my-10">
                {faqData.raise.map((item) => (
                  <div key={item.id} className="border-b border-gray-300">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-4 flex justify-between items-center text-left text-[16px] font-bold"
                    >
                      <span>{item.question}</span>
                      {openItem === item.id ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {openItem === item.id && (
                      <div className="py-4">
                        <p className="text-[16px]" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
