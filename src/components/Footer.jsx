import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-border-color text-center py-2 bg-primary-background">
      <p>&copy; Copyrights reserved 2024</p>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-4 text-2xl">
        <a href={import.meta.env.VITE_LINKEDIN_URL} className="hover:text-theme-color">
          <FaLinkedin />
        </a>
        <a href={import.meta.env.VITE_GITHUB_URL} className="hover:text-theme-color">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
