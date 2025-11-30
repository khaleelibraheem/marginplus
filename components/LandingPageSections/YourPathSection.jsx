import Link from "next/link";

const steps = [
  {
    title: "Join as an Agent",
    description:
      "Lead structured farming clusters in your community, helping farmers access the tools, training, and markets they need to succeed every season.",
  },
  {
    title: "Join as a Member",
    description:
      "Be part of a growing network that supports real agricultural opportunities, driving community impact while contributing to sustainable farming projects.",
  },
  {
    title: "Partner with Us",
    description:
      "Work with us to build scalable agricultural systems that connect finance, technology, and farming communities for long-term economic growth.",
  },
];
export default function YourPathSection() {
  return (
    <section className="mt-20 max-w-[1200px] mx-auto px-4 md:px-0">
      <h2 className="text-[24px] text-center font-bold mb-14">
        Your Path to Impact Starts Here
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-[15px] bg-[#F6F6F6] border border-gray-200 rounded-[17px] hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-[24px] font-bold mb-2 text-secondary">{step.title}</h3>
            <p className="text-[14px] md:text-[16px]">{step.description}</p>
            <Link href={"#"}>
            <button className="bg-secondary w-full sm:w-auto sm:px-[20px] py-[12.21px] rounded-[9.16px] text-white text-[12.14px] font-bold mt-5 cursor-pointer">{step.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
