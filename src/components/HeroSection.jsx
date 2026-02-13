export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/hsi_bg.jpg')`, 
        }}
      >
        <div className="absolute inset-0 bg-blue-medium/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-black text-brand-orange mb-4 tracking-tight drop-shadow-md">
          Unleash Web Developers
        </h1>
        
        <p className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
          A collaborative team building and maintaining internal web solutions.
        </p>

        <button className="bg-brand-orange text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
          meet the team
        </button>
      </div>
    </section>
  );
};