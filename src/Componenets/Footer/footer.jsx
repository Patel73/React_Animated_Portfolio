import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-80 text-white py-6 mt-12 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-start flex-wrap gap-4">

        
        <div className="text-sm font-light text-left w-auto">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Created by Nadim
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-sm font-light w-auto">

          <div className="flex items-center gap-2">
            <MdPhone size={20} className="text-cyan-400" />
            <a href="tel:+917387020567" className="underline hover:text-cyan-400">
              +91 7387020567
            </a>
          </div>

          
          <div className="flex items-center gap-2 break-all">
            <MdEmail size={20} className="text-cyan-400" />
            <a href="mailto:nadimkhanpatel@gmail.com" className="underline hover:text-cyan-400">
              nadimkhanpatel@gmail.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;



