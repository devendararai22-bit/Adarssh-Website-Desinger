import { MessageSquare, PenTool, RefreshCw, CheckCircle, HeadphonesIcon } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Discuss Requirements',
      description: 'We start by understanding your business, goals, and what you want to achieve with your website.',
      icon: MessageSquare,
    },
    {
      title: 'Design Website',
      description: 'I create a modern, responsive design tailored to your brand identity and requirements.',
      icon: PenTool,
    },
    {
      title: 'Review & Changes',
      description: 'You review the design, and I make necessary adjustments until you are completely satisfied.',
      icon: RefreshCw,
    },
    {
      title: 'Final Delivery',
      description: 'Once approved, the website is finalized, optimized, and delivered to you ready to launch.',
      icon: CheckCircle,
    },
    {
      title: 'Support',
      description: 'I provide friendly support to ensure your website runs smoothly even after delivery.',
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section id="process" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Working Process</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            A simple, transparent, and effective process to bring your vision to life.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md border-4 border-gray-50 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
