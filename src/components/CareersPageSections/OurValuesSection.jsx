export default function OurValuesSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We don’t settle for the status quo. At Marginplus, innovation means rethinking what’s possible and building smarter, simpler ways to solve agriculture problems. From product design to backend systems, we’re always experimenting and improving.",
      accentColor: "bg-[#00A85947]",
    },
    {
      title: "Integrity",
      description:
        "Trust is our foundation. We operate with transparency, honesty, and accountability—whether protecting our users’ investments or collaborating as a team. Integrity guides everything we do.",
      accentColor: "bg-[#2DA80047]",
    },
    {
      title: "Excellence",
      description:
        "Good isn’t good enough. We’re committed to delivering top-tier products and experiences. Every detail matters, and we aim to consistently exceed expectations.",
      accentColor: "bg-[#FFC727]",
    },
    {
      title: "Empathy",
      description:
        "We design with people in mind. By listening, understanding, and building with care, we create products that genuinely serve users’ needs and fit into their lives.",
      accentColor: "bg-[#B2FF96]",
    },
    {
      title: "Collaboration",
      description:
        "Great things happen when we work together. We value open communication, shared goals, and diverse perspectives. Teamwork is how we build and grow.",
      accentColor: "bg-[#008647]",
    },
    {
      title: "Ownership",
      description:
        "We take initiative and own our outcomes. At Marginplus, everyone is empowered to lead, take responsibility, and follow through. We don’t wait for change—we drive it.",
      accentColor: "bg-[#014F2A]",
    },
  ];
  return (
    <section className="mt-20 max-w-[1400px] px-4 mx-auto">
      {/* Section Header */}
      <div className="max-w-[350px] sm:max-w-[812px] mx-auto flex flex-col items-center">
        <h2 className="text-center text-[#004D2E] font-bold text-[21px] sm:text-[26px] opacity-80">
          Our Values
        </h2>
        <p className="mt-4 text-sm text-center leading-5">
          At Marginplus, we believe real change starts with bold ideas. We’re on
          a mission to simplify investing, redefine financial freedom, and help
          everyday people build wealth through powerful, user-centered
          solutions.
        </p>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="overflow-hidden max-w-[352px] mx-auto">
              <div>
                <h3 className="text-[28px] md:text-[40px] font-medium mb-3">{value.title}</h3>
                <div
                  className={`h-2 ${value.accentColor} rounded-[80px] mb-3`}
                ></div>
                <p className="text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
