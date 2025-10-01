import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Server, Database } from 'lucide-react';
const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Desarrollo Frontend',
      description: 'React, Next.js, TypeScript, TailwindCSS',
    },
    {
      icon: Server,
      title: 'Desarrollo Backend',
      description: 'Node.js, Express, PHP Laravel, APIs REST',
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'React Native para iOS y Android',
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      description: 'PostgreSQL, MongoDB, MySQL',
    },
  ];
  return (
    <section id='sobre-mi' className='py-20 px-6'>
      <div className='container mx-auto'>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Sobre Mí
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Soy un desarrollador apasionado con 5 años de experiencia creando
            soluciones web y móviles innovadoras
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className='relative'>
              <img
                src='https://horizons-cdn.hostinger.com/cdf6afdc-464b-4ae9-b908-071ff0cca4f3/generated-image-september-29-2025---2_33am-ZxK15.png'
                alt='Perfil profesional del desarrollador'
                className='w-full max-w-md mx-auto rounded-2xl shadow-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-2xl'></div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className='space-y-6'
          >
            <div className='prose prose-lg text-gray-300'>
              <p className='text-lg leading-relaxed'>
                Con{' '}
                <span className='text-cyan-400 font-semibold'>
                  5 años de experiencia
                </span>{' '}
                en el desarrollo de software, me especializo en crear
                aplicaciones web robustas y aplicaciones móviles nativas que
                ofrecen experiencias de usuario excepcionales.
              </p>
              <p className='text-lg leading-relaxed'>
                Mi expertise abarca desde el frontend con{' '}
                <span className='text-purple-400 font-semibold'>
                  React y React Native
                </span>
                , hasta el backend con{' '}
                <span className='text-pink-400 font-semibold'>
                  Node.js y PHP Laravel
                </span>
                , trabajando con stacks completos como PERN y MERN.
              </p>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 mt-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className='bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300'
                >
                  <feature.icon className='text-cyan-400 mb-2' size={24} />
                  <h3 className='text-white font-semibold mb-1'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-400 text-sm'>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
