import { CheckCircle2, MonitorSmartphone, Rocket, ShieldCheck, Star, Clock, HeartHandshake, Settings } from 'lucide-react';

export default function Services() {
  const basicFeatures = [
    '3–4 Pages Website',
    'Mobile Responsive Design',
    'Modern Layout',
    'Contact Form',
    'Fast Loading',
    'Basic SEO Setup',
    'Professional Design'
  ];

  const premiumFeatures = [
    '5–8 Pages Website',
    'Premium UI Design',
    'Mobile Responsive',
    'Contact Form',
    'Fast Loading',
    'SEO Friendly',
    'Professional Layout',
    'WhatsApp Integration',
    'Extra Design Customization'
  ];

  const whyChooseMe = [
    { text: 'Affordable Website Design', icon: ShieldCheck },
    { text: 'Student with Modern Ideas', icon: Star },
    { text: 'Professional Website Layout', icon: MonitorSmartphone },
    { text: 'Fast Delivery', icon: Clock },
    { text: 'Friendly Support', icon: HeartHandshake },
    { text: 'Custom Design', icon: Settings }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Website Design Services</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 mb-4">
            I offer affordable and professional website design services for businesses, individuals, and startups. My goal is to create modern, responsive, and user-friendly websites that help you grow online.
          </p>
          <p className="text-lg text-gray-600">
            Whether you are starting a new business or want to upgrade your existing website, I can help you with a clean and professional website design.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Pricing Plans</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Basic Plan */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Basic Website</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold text-blue-600">₹4000</span>
              </div>
              <p className="text-gray-600 mb-8 font-medium">Perfect for small businesses and personal use</p>
              
              <div className="space-y-4">
                <p className="font-semibold text-gray-900 mb-4">Features Included:</p>
                {basicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#contact" 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('prefillContact', { detail: { subject: 'Inquiry: Basic Website Plan (₹4000)' } }));
                }}
                className="mt-8 block w-full py-3 px-6 text-center rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Choose Basic
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-xl relative overflow-hidden group transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Premium Website</h4>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold text-blue-400">₹10000</span>
              </div>
              <p className="text-gray-400 mb-8 font-medium">Perfect for businesses who want a professional online presence</p>
              
              <div className="space-y-4">
                <p className="font-semibold text-white mb-4">Features Included:</p>
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#contact" 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('prefillContact', { detail: { subject: 'Inquiry: Premium Website Plan (₹10000)' } }));
                }}
                className="mt-8 block w-full py-3 px-6 text-center rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
              >
                Choose Premium
              </a>
            </div>

          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Free Demo Website */}
          <div className="bg-blue-50/80 backdrop-blur-md rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-10">
              <Rocket size={120} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Demo Website</h3>
            <p className="text-gray-700 mb-6">
              If you are interested in working with me, I can also create a demo website for your business. This helps you understand the design quality before starting the project.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <CheckCircle2 className="text-green-500" size={20} /> No risk
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <CheckCircle2 className="text-green-500" size={20} /> See design first
              </li>
              <li className="flex items-center gap-3 font-medium text-gray-800">
                <CheckCircle2 className="text-green-500" size={20} /> Then decide
              </li>
            </ul>
          </div>

          {/* Why Choose Me */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Me</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseMe.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <Icon size={18} />
                    </div>
                    <span className="font-medium text-gray-800 text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
