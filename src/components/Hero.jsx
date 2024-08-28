import { Link } from "react-router-dom";
import HeroImg from "../assets/HeroImg.jsx";
import WaveSvg from "../assets/WaveSvg.jsx";

const Hero = () => {
  return (
    <section className="hero">
      <div className="centered-container flex-col-reverse flex md:flex-row py-8 px-3 gap-10">
        <div className="md:w-2/5 flex flex-col justify-center items-center text-primary-text">
          <h2 className="text-2xl md:text-4xl font-cardo font-bold mb-2 md:mb-4 text-center md:self-start md:text-left">
            <span className="text-theme-color">SmartCart:</span> Your Shopping
            Sidekick
          </h2>
          <p className="text-sm md:text-base uppercase tracking-wide text-secondary-text text-center md:self-start md:text-left py-2 font-inter">
            Navigate Your Shopping Smarter.
          </p>
          <Link to="/products"
            className="bg-theme-color text-button-text-color rounded-full py-2 md:py-4 px-4 md:px-8 uppercase text-base md:text-xl md:self-start my-3 md:my-5"
          >
            Shop now
          </Link>
        </div>
        <div className="md:w-3/5 flex">
          <HeroImg />
        </div>
      </div>
      <WaveSvg />
    </section>
  );
};

export default Hero;
