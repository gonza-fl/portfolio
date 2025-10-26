import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import HeroImage from './HeroImage';
const Hero = () => {
  const { toast } = useToast();
  const handleSocialClick = (platform) => {
    const links = {
      'GitHub': 'https://github.com/gonza-fl',
      'LinkedIn': 'https://linkedin.com/in/gonza-flamenci',
      'Email': 'mailto:gonzaloflamenci4@gmail.com',
      'portfolio': '#portafolio'
    };
    
    if (platform === 'portfolio') {
      const element = document.querySelector('#portafolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (links[platform]) {
      window.open(links[platform], platform === 'Email' ? '_self' : '_blank');
    }
  };
  const scrollToAbout = () => {
    const element = document.querySelector('#sobre-mi');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <section
      id='inicio'
      className='min-h-screen flex items-center justify-center pt-20'
    >
      <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-0'>
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className='text-center lg:text-left'
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className='text-5xl lg:text-7xl font-bold mb-6'
          >
            <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Desarrollador
            </span>
            <br />
            <span className='text-white'>Full Stack</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className='text-xl text-gray-300 mb-8 max-w-2xl lg:mx-0 mx-auto'
          >
            Desarrollador web y de apps nativas con{' '}
            <span className='text-cyan-400 font-semibold'>
              5 años de experiencia
            </span>
            . Especializado en stacks{' '}
            <span className='text-purple-400 font-semibold'>PERN, MERN</span> y
            <span className='text-pink-400 font-semibold'>
              {' '}
              PHP con Laravel
            </span>
            .
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className='flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start'
          >
            <Button
              onClick={() => scrollToAbout()}
              className='bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              Conoce mi trabajo
            </Button>
            <Button
              onClick={() => handleSocialClick('portfolio')}
              variant='outline'
              className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300'
            >
              Ver Portafolio
            </Button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className='flex justify-center lg:justify-start space-x-6'
          >
            {[
              {
                icon: Github,
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                label: 'Email',
              },
            ].map(({ icon: Icon, label }) => (
              <motion.button
                key={label}
                onClick={() => handleSocialClick(label)}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 shadow-lg'
              >
                <Icon size={24} />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className='relative mt-12 lg:mt-0'
        >
          <div className='relative z-10'>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='relative'
            >
              <HeroImage />
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 blur-xl'></div>
          <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl'></div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className='text-gray-400 hover:text-cyan-400 transition-colors duration-300'
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
export default Hero;
