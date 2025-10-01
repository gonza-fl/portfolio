import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Función en desarrollo',
      description:
        '🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gonzaloflamenci4@gmail.com',
      gradient: 'from-cyan-400 to-blue-500',
      link: 'mailto:gonzaloflamenci4@gmail.com',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: '/gonza-flamenci',
      gradient: 'from-purple-400 to-pink-500',
      link: 'https://linkedin.com/in/gonza-flamenci',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '/gonza-fl',
      gradient: 'from-green-400 to-cyan-500',
      link: 'https://github.com/gonza-fl',
    },
  ];

  return (
    <section id='contacto' className='py-20 bg-slate-900/50'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Trabajemos Juntos
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            ayudarte a hacerlas realidad
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-white mb-6'>
                Información de Contacto
              </h3>
              <p className='text-gray-300 mb-8'>
                Estoy disponible para proyectos freelance y oportunidades de
                colaboración. No dudes en contactarme para discutir tu próximo
                proyecto.
              </p>
            </div>

            <div className='space-y-6'>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:bg-slate-700/30'
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient} bg-opacity-20`}
                  >
                    <info.icon className='text-white' size={24} />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold'>{info.title}</h4>
                    <p className='text-gray-300'>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-white font-medium mb-2'
                >
                  Nombre
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300'
                  placeholder='Tu nombre completo'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-white font-medium mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300'
                  placeholder='tu@email.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-white font-medium mb-2'
                >
                  Mensaje
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className='w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none'
                  placeholder='Cuéntame sobre tu proyecto...'
                  required
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2'
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
