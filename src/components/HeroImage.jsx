const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img
        src='/public/images/hero.png'
        alt='Desarrollador profesional Gonzalo Flamenci'
        className='w-full max-w-lg mx-auto rounded-2xl shadow-2xl'
      />
      <div className='absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl'></div>
    </div>
  );
};

export default HeroImage;
