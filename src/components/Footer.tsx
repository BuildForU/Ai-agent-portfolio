import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full py-6 bg-gradient-to-t from-white via-gray-50 to-purple-50 border-none">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AI Agent Portfolio. All rights reserved.
      </div>
      <div className="flex gap-4 text-gray-400 text-xl">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 dark:hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer; 