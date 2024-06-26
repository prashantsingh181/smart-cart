import { useNavigate } from 'react-router-dom';
import heroImg from "../assets/hero-img.svg"

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="md:flex md:flex-row mt-10">
            <div
                className="md:w-2/5 flex flex-col justify-center items-center text-black"
            >
                <h2
                    className="text-4xl font-cardo mb-4 text-center md:self-start md:text-left"
                >
                    <span className="text-accent">SmartCart:</span> Your Shopping Sidekick
                </h2>
                <p
                    className="uppercase tracking-wide text-gray-600 text-center md:self-start md:text-left py-2 font-inter"
                >
                    Navigate Your Shopping Smarter.
                </p>
                <button
                    href=""
                    className="bg-accent text-white rounded-full py-4 px-8 uppercase text-gray-50 text-xl md:self-start my-5"
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