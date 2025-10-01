import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Gonzalo Flamenci - Desarrollador Web Full Stack</title>
        <meta
          name='description'
          content='Desarrollador web y de apps nativas con React Native. Especializado en stacks PERN, MERN y PHP con Laravel. Contacto: gonzaloflamenci4@gmail.com'
        />
      </Helmet>

      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900'>
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
