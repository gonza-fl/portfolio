import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = ({ selectedSkill }) => {
  const { toast } = useToast();

  const handleProjectClick = (action) => {
    toast({
      title: "🚧 Función en desarrollo",
      description: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  const allProjects = useMemo(() => [
    {
      title: 'E-commerce MERN Stack',
      description: 'Plataforma de comercio electrónico completa con React, Node.js, Express y MongoDB. Incluye sistema de pagos, gestión de inventario y panel de administración.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      type: 'web',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'App Móvil de Delivery',
      description: 'Aplicación móvil para delivery de comida desarrollada con React Native. Incluye geolocalización, pagos en línea y seguimiento en tiempo real.',
      tech: ['React Native', 'Firebase', 'Google Maps', 'Redux'],
      type: 'mobile',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Sistema CRM Laravel',
      description: 'Sistema de gestión de relaciones con clientes desarrollado con PHP Laravel. Dashboard completo con reportes y análisis de ventas.',
      tech: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Chart.js'],
      type: 'web',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'API REST Microservicios',
      description: 'Arquitectura de microservicios con Node.js y PostgreSQL. Incluye autenticación JWT, documentación con Swagger y tests automatizados.',
      tech: ['Node.js', 'PostgreSQL', 'Docker', 'JWT', 'Swagger'],
      type: 'api',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para análisis de datos con Next.js y TypeScript. Visualizaciones en tiempo real y exportación de reportes.',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'Prisma', 'PostgreSQL'],
      type: 'web',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'App Fitness React Native',
      description: 'Aplicación móvil para seguimiento de ejercicios y nutrición. Incluye planes personalizados y sincronización con wearables.',
      tech: ['React Native', 'Redux Toolkit', 'SQLite', 'HealthKit'],
      type: 'mobile',
      gradient: 'from-pink-400 to-rose-500'
    }
  ], []);

  const filteredProjects = useMemo(() => {
    if (!selectedSkill) {
      return allProjects;
    }
    return allProjects.filter(project => project.tech.includes(selectedSkill));
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
    <section id="proyectos" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {selectedSkill 
              ? `Mostrando proyectos con ${selectedSkill}`
              : 'Una selección de mi trabajo en desarrollo full stack'
            }
          </p>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const IconComponent = getIcon(project.type);
              
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <IconComponent className={`text-white`} size={24} />
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => handleProjectClick('github')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <Github size={18} />
                      </motion.button>
                      <motion.button
                        onClick={() => handleProjectClick('demo')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </motion.button>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/20 ${tech === selectedSkill ? 'ring-2 ring-cyan-400' : ''}`}
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
        
        {filteredProjects.length === 0 && selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400">
              No hay proyectos que mostrar para la habilidad <span className="font-semibold text-cyan-400">{selectedSkill}</span>.
            </p>
            <p className="text-gray-500 mt-2">¡Pronto añadiré más proyectos!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
