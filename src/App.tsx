import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth relative overflow-x-hidden">
      {/* Global Attractive Background */}
      <div className="fixed inset-0 -z-20 h-full w-full bg-blue-50/40 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#bfdbfe,transparent)]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(circle_600px_at_0%_0%,#93c5fd,transparent)]"
        />
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
