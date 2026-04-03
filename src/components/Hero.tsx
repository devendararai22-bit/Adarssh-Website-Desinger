import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Professional Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_60%)]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Hi, I'm Adarssh Rai <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Website Designer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              I create modern, professional, and responsive websites for businesses and individuals. Helping you build a strong online identity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('prefillContact', { detail: { subject: 'New Project Inquiry' } }));
                }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-white hover:border-gray-300 transition-all"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600 shrink-0" />
                <span>+91 9549626018</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600 shrink-0" />
                <span className="break-all">techadarshtechno@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[451px]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[451/348] group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
              <img
                id="profile-image"
                src="https://i.ibb.co/7J5p48dc/Whats-App-Image-2026-03-28-at-6-57-17-PM.jpg"
                alt="Adarssh Rai"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
                <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-full px-8 py-2.5 shadow-lg">
                  <p className="font-bold text-gray-900 text-lg tracking-wide">Our Team</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200/50 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-200/50 rounded-full -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
