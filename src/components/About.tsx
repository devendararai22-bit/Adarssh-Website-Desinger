import { CheckCircle2, Target, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Hello, I'm Adarssh Rai, a passionate Website Designer and Student based in Jaipur, Rajasthan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <User size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I am currently studying in Class 11, and alongside my studies, I design modern, responsive, and professional websites for businesses, individuals, and startups. I started website designing with a strong interest in technology, creativity, and digital solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">My Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                My mission is to help businesses and individuals build their online identity with beautiful and professional websites. My goal is to help businesses establish a strong online presence with clean, attractive, and user-friendly websites.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Me</h3>
            <ul className="space-y-4">
              {[
                'Affordable Pricing',
                'Fast Delivery',
                'Student with Modern Ideas',
                'Professional Design',
                'Friendly Support',
                'Custom Website Design'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-600 italic">
                "Even as a student, I focus on delivering professional-quality websites at affordable prices."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
