import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleProjectClick = () => {
    toast({
      title: '🚧 Función en desarrollo',
      description:
        '🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Pronto la añadiré! 🚀',
    });
  };

  const handleSkillSelect = (skill) => {
    setSelectedSkill((prevSkill) => (prevSkill === skill ? null : skill));
  };

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: ['React', 'Next.js', 'TailwindCSS'],
    },
    {
      title: 'Backend',
      color: 'from-purple-400 to-pink-500',
      skills: ['Nest.js', 'Express', 'PHP', 'Laravel', 'Docker'],
    },
    {
      title: 'Mobile & Database',
      color: 'from-green-400 to-cyan-500',
      skills: [
        'React Native',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Supabase',
      ],
    },
  ];

  const allProjects = useMemo(
    () => [
      {
        title: 'Marketplace de Servicios',
        description:
          'Plataforma tipo Uber para servicios locales. Chat en tiempo real, geolocalización, pagos integrados y sistema de calificaciones.',
        tech: ['Next.js', 'Supabase', 'TailwindCSS'],
        type: 'web',
        gradient: 'from-cyan-400 to-blue-500',
        features: ['Chat en tiempo real', 'Geolocalización', 'Pagos Stripe', 'Sistema de reviews'],
      },
      {
        title: 'App de Delivery de Comida',
        description:
          'App móvil completa para delivery. Tracking en tiempo real, notificaciones push, integración con restaurantes y sistema de propinas.',
        tech: ['React Native', 'Supabase', 'Express'],
        type: 'mobile',
        gradient: 'from-purple-400 to-pink-500',
        features: ['Tracking GPS', 'Notificaciones push', 'Pagos móviles', 'Chat con repartidor'],
      },
      {
        title: 'Sistema de Gestión Empresarial',
        description:
          'ERP completo para PYMEs. Gestión de inventario, facturación, RRHH y reportes financieros con dashboard interactivo.',
        tech: ['Laravel', 'MySQL', 'React'],
        type: 'web',
        gradient: 'from-green-400 to-cyan-500',
        features: ['Dashboard analytics', 'Facturación automática', 'Gestión de inventario', 'Reportes PDF'],
      },
      {
        title: 'API de Microservicios Fintech',
        description:
          'Arquitectura de microservicios para fintech. Procesamiento de pagos, validación de identidad, scoring crediticio y auditoría.',
        tech: ['Nest.js', 'PostgreSQL', 'Docker'],
        type: 'api',
        gradient: 'from-orange-400 to-red-500',
        features: ['Microservicios', 'Autenticación JWT', 'Rate limiting', 'Logs de auditoría'],
      },
      {
        title: 'Plataforma de Cursos Online',
        description:
          'LMS completo con video streaming, exámenes interactivos, certificados automáticos y sistema de progreso gamificado.',
        tech: ['Next.js', 'MongoDB', 'TailwindCSS'],
        type: 'web',
        gradient: 'from-indigo-400 to-purple-500',
        features: ['Video streaming', 'Exámenes interactivos', 'Certificados PDF', 'Gamificación'],
      },
      {
        title: 'App de Salud Mental',
        description:
          'App móvil para seguimiento de bienestar mental. Diario de emociones, meditaciones guiadas, recordatorios y métricas de progreso.',
        tech: ['React Native', 'Supabase', 'Express'],
        type: 'mobile',
        gradient: 'from-pink-400 to-rose-500',
        features: ['Diario de emociones', 'Meditaciones', 'Recordatorios', 'Métricas de progreso'],
      },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (!selectedSkill) {
      return allProjects;
    }
    return allProjects.filter((project) =>
      project.tech.includes(selectedSkill)
    );
  }, [selectedSkill, allProjects]);

  const getIcon = (type) => {
    switch (type) {
      case 'mobile':
        return Smartphone;
      case 'api':
        return Globe;
      default:
        return Globe;
    }
  };

  return (
    <section id='portafolio' className='py-16 px-6 bg-slate-900/50 min-h-screen'>
      <div className='container mx-auto'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl lg:text-5xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
              Portafolio y Habilidades
            </span>
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Explora mis proyectos y haz clic en cualquier tecnología para ver ejemplos específicos de implementación.
          </p>
        </motion.div>

        {/* Main Layout: Sidebar + Projects Area */}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 h-[calc(100vh-300px)] lg:h-[calc(100vh-300px)]'>
          {/* Sidebar - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='lg:w-80 flex-shrink-0 h-64 lg:h-full'
          >
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-slate-700/50 h-full overflow-y-auto'>
              <h3 className='text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 text-center'>
                Tecnologías
              </h3>
              
              <div className='space-y-4 lg:space-y-6'>
                {skillCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4
                      className={`text-base lg:text-lg font-bold mb-2 lg:mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h4>
                    <div className='space-y-1 lg:space-y-2'>
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            onClick={() => handleSkillSelect(skill)}
                            variant={selectedSkill === skill ? 'default' : 'ghost'}
                            size='sm'
                            className={`
                              w-full justify-start font-medium transition-all duration-300 text-sm lg:text-base
                              ${
                                selectedSkill === skill
                                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                              }
                            `}
                          >
                            {skill}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Clear Filter Button */}
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-slate-700/50'
                >
                  <Button
                    onClick={() => handleSkillSelect(null)}
                    variant='outline'
                    size='sm'
                    className='w-full text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10 text-sm'
                  >
                    Limpiar filtro
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Projects Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex-1'
          >
            <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-slate-700/50 h-full flex flex-col'>
              {/* Projects Header */}
              <div className='mb-4 lg:mb-6'>
                <h3 className='text-xl lg:text-2xl font-bold text-white mb-2'>
                  {selectedSkill
                    ? `Proyectos con ${selectedSkill}`
                    : 'Proyectos Destacados'}
                </h3>
                {selectedSkill && (
                  <div className='inline-flex items-center gap-2 bg-cyan-400/10 rounded-full px-3 py-1 border border-cyan-400/30'>
                    <span className='text-cyan-400 text-xs lg:text-sm font-medium'>
                      Filtrando por: <span className='text-white'>{selectedSkill}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Projects Grid with Scroll */}
              <div className='flex-1 overflow-y-auto'>
                <motion.div layout className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-4'>
                  <AnimatePresence>
                    {filteredProjects.map((project) => {
                      const IconComponent = getIcon(project.type);

                      return (
                        <motion.div
                          layout
                          key={project.title}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                          className='group relative bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]'
                        >
                          <div className='flex items-center justify-between mb-3'>
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                            >
                              <IconComponent className={`text-white`} size={18} />
                            </div>
                            <div className='flex space-x-1'>
                              <motion.button
                                onClick={() => handleProjectClick('github')}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='p-1.5 bg-slate-600/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-200'
                              >
                                <Github size={16} />
                              </motion.button>
                              <motion.button
                                onClick={() => handleProjectClick('demo')}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='p-1.5 bg-slate-600/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-200'
                              >
                                <ExternalLink size={16} />
                              </motion.button>
                            </div>
                          </div>

                          <h3 className='text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
                            {project.title}
                          </h3>

                          <p className='text-gray-300 mb-3 text-sm leading-relaxed'>
                            {project.description}
                          </p>

                          {/* Features destacadas */}
                          {project.features && (
                            <div className='mb-3'>
                              <div className='flex flex-wrap gap-1'>
                                {project.features.slice(0, 2).map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className='px-2 py-1 text-xs bg-slate-600/50 text-cyan-300 rounded-full border border-cyan-400/30'
                                  >
                                    {feature}
                                  </span>
                                ))}
                                {project.features.length > 2 && (
                                  <span className='px-2 py-1 text-xs bg-slate-600/50 text-gray-400 rounded-full'>
                                    +{project.features.length - 2} más
                                  </span>
                                )}
                              </div>
                            </div>
                          )}

                          <div className='flex flex-wrap gap-1 mb-3'>
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${
                                  project.gradient
                                } bg-opacity-20 text-white border border-white/20 ${
                                  tech === selectedSkill ? 'ring-2 ring-cyan-400' : ''
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Button
                            onClick={() => handleProjectClick('details')}
                            className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300`}
                          >
                            Ver Detalles
                          </Button>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {filteredProjects.length === 0 && selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center py-16'
          >
            <p className='text-xl text-gray-400'>
              No hay proyectos que mostrar para la habilidad{' '}
              <span className='font-semibold text-cyan-400'>
                {selectedSkill}
              </span>
              .
            </p>
            <p className='text-gray-500 mt-2'>¡Pronto añadiré más proyectos!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
