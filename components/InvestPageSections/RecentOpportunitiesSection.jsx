import React from 'react';
import InvestmentCard from './InvestmentCard';

export default function RecentOpportunitiesSection() {
  const investmentOpportunities = [
    {
      id: 1,
      title: "Chicken Farm",
      imageUrl: "/images/chicken-img.png",
      returnRate: "Up to 8% in 3 months",
      riskLevel: "High Risk",
      investorCount: "1,432",
      price: "₦20,000"
    },
    {
      id: 2,
      title: "Rice Farm",
      imageUrl: "/images/grass-img.png",
      returnRate: "Up to 25% in 12 months",
      riskLevel: "Medium Risk",
      investorCount: "223",
      price: "₦35,000"
    },
    {
      id: 3,
      title: "Cashew Production 2025",
      imageUrl: "/images/cashew-img.png",
      returnRate: "Up to 18% in 6 months",
      riskLevel: "Low Risk",
      investorCount: "758",
      price: "₦50,000"
    }
  ];

  return (
    <section className='mb-60'>
      {/* Section Header */}
      <div className="mt-20 max-w-[350px] sm:max-w-[640px] mx-auto flex flex-col items-center">
        <h2 className="text-center font-bold text-[21px] sm:text-[26px] opacity-80">
          Recent Opportunities on Marginplus
        </h2>
        <p className="mt-6 text-sm text-center leading-5">
          Discover the latest vetted investment openings across farming and agribusiness, all designed for impact and strong returns
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-[1400px] mx-auto px-6 lg:px-10 gap-5 lg:gap-4">
        {investmentOpportunities.map((opportunity) => (
          <InvestmentCard
            key={opportunity.id}
            title={opportunity.title}
            imageUrl={opportunity.imageUrl}
            returnRate={opportunity.returnRate}
            riskLevel={opportunity.riskLevel}
            investorCount={opportunity.investorCount}
            price={opportunity.price}
          />
        ))}
      </div>
      
    </section>
  );
}