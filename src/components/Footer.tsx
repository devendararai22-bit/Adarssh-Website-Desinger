import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Code2 size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Adarssh<span className="text-blue-500">.</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Modern, professional, and responsive websites for businesses and individuals.
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Adarssh Rai Web Design.<br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
