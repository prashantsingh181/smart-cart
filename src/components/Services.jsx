import { FaHandHoldingHeart, FaTruckFast } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const services = [
  {
    imgURL: <FaTruckFast className="text-button-text-color" />,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: (
      <IoShieldCheckmark className="text-button-text-color" />
    ),
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: (
      <FaHandHoldingHeart className="text-button-text-color" />
    ),
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

const Services = () => {
  return (
    <section className="flex justify-center flex-wrap gap-8">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

const ServiceCard = function ({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 min-w-[250px] sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl border border-border-color px-6 py-10 my-4">
      <div className="p-3 bg-theme-color rounded-full inline-block text-2xl">
        {imgURL}
      </div>
      <h3 className="mt-5 font-cardo text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-inter text-lg leading-normal text-primary-text">
        {subtext}
      </p>
    </div>
  );
};

export default Services;
