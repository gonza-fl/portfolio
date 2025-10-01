import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';
const Footer = () => {
  return (
    <footer className='py-8 px-6 border-t border-slate-700/50'>
      <div className='container mx-auto'>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className='text-center'
        >
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <Code className='text-cyan-400' size={20} />
            <span className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Gonzalo Flamenci
            </span>
          </div>

          <p className='text-gray-400 flex flex-col sm:flex-row items-center justify-center space-x-2'>
            <span>Hecho con</span>
            <Heart className='text-red-400' size={16} />
            <span>por un desarrollador apasionado</span>
          </p>

          <p className='text-gray-500 text-sm mt-2'>© 2025 Gonzalo Flamenci.</p>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
