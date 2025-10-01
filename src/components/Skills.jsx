import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Skills = ({ selectedSkill, onSkillSelect }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'TailwindCSS',
        'JavaScript',
        'Vue.js',
      ],
    },
    {
      title: 'Backend',
      color: 'from-purple-400 to-pink-500',
      skills: [
        'Node.js',
        'Express',
        'PHP',
        'Laravel',
        'GraphQL',
        'Docker',
        'Swagger',
        'Prisma',
      ],
    },
    {
      title: 'Mobile & Database',
      color: 'from-green-400 to-cyan-500',
      skills: [
        'React Native',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Firebase',
        'Redux',
        'SQLite',
      ],
    },
  ];

  return (
    <section id='habilidades' className='py-20 px-6 bg-slate-900/50'>
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
              Habilidades Técnicas
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            Haz clic en una tecnología para ver los proyectos donde la he
            utilizado.
          </p>
        </motion.div>

        <div className='space-y-12'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className='flex flex-wrap justify-center gap-3'>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => onSkillSelect(skill)}
                      variant={selectedSkill === skill ? 'default' : 'outline'}
                      className={`
                        font-semibold rounded-full transition-all duration-300
                        ${
                          selectedSkill === skill
                            ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                            : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-slate-700/70 hover:text-white'
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          {selectedSkill && (
            <Button
              onClick={() => onSkillSelect(null)}
              variant='ghost'
              className='text-cyan-400 hover:text-cyan-300 hover:bg-slate-800'
            >
              Mostrar todos los proyectos
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
