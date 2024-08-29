import { FaHandHoldingHeart, FaTruckFast } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

const services = [
  {
    icon: <FaTruckFast className="text-button-text-color" />,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: <IoShieldCheckmark className="text-button-text-color" />,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: <FaHandHoldingHeart className="text-button-text-color" />,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

const Services = () => {
  return (
    <section className="bg-secondary-background">
      <div className="centered-container flex justify-center flex-wrap gap-4 md:gap-8 py-6 px-4">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = function ({ icon, label, subtext }) {
  return (
    <div className="flex-1 min-w-[250px] sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] bg-primary-background shadow shadow-shadow-color border border-border-color px-4 md:px-6 py-4 md:py-10 my-0 md:my-4">
      <div className="p-3 bg-theme-color rounded-full inline-block text-xl md:text-2xl">
        {icon}
      </div>
      <h3 className="mt-3 md:mt-5 font-cardo text-xl md:text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-inter md:text-lg leading-normal text-primary-text">
        {subtext}
      </p>
    </div>
  );
};

export default Services;
