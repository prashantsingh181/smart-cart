import { useNavigate } from 'react-router-dom';
import heroImg from "../assets/hero-img.svg"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="md:flex md:flex-row mt-10 px-3">
            <div
                className="md:w-2/5 flex flex-col justify-center items-center text-primary-text"
            >
                <h2
                    className="text-4xl font-cardo mb-4 text-center md:self-start md:text-left"
                >
                    <span className="text-theme-color">SmartCart:</span> Your Shopping Sidekick
                </h2>
                <p
                    className="uppercase tracking-wide text-secondary-text text-center md:self-start md:text-left py-2 font-inter"
                >
                    Navigate Your Shopping Smarter.
                </p>
                <button
                    href=""
                    className="bg-theme-color text-button-text-color rounded-full py-4 px-8 uppercase text-xl md:self-start my-5"
                    onClick={() => navigate("/products")}
                >Shop now</button
                >
            </div>
            <div className="md:w-3/5">
                <img src={heroImg} alt="hero banner" />
            </div>
        </div>
    );
}

export default Hero