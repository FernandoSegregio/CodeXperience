import logoCode from '@assets/logo_code.webp';
import logoCodeSmall from '@assets/codeSmall.webp';
import codeSmall from '@assets/small2023.webp';
import codeMedium from '@assets/medium2023.webp';
import codeLarge from '@assets/large2023.webp';
import Header from '@components/Header';

import { motion } from "framer-motion";

export default function Hero() {
  return (<div id='1' className="w-full h-[39rem] relative flex flex-col items-center justify-center">

    {/* Novo bloco com logo e selo diagonal */}
    <div className="absolute flex items-center justify-center z-50 md:top-52">
      <div className="relative flex items-center justify-center">
        {/* Logo principal */}
        <img
          src={logoCodeSmall}
          srcSet={`${logoCodeSmall} 400w, ${logoCode} 600w`}
          sizes="(max-width: 640px) 400px, 600px"
          alt="Logo CodeExperience"
          className="h-48 sm:h-[220px] md:h-[300px] object-contain"
        />

        {/* Selo 2025 em diagonal */}
        <span
          className="
          absolute
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r 
          from-purple-400 
          via-pink-500 
          to-blue-500 
          font-extrabold 
          text-6xl 
          md:text-7xl 
          drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
          transform 
          rotate-[-20deg] 
          translate-x-[60%] 
          -translate-y-[40%]
          animate-pulse
        "
        >
          2025
        </span>
      </div>
    </div>

    <Header />

    <div className='bg-black w-full h-full absolute opacity-60'></div>

    <img
      src={codeMedium}
      srcSet={`${codeSmall} 600w, ${codeMedium} 1200w, ${codeLarge} 1800w`}
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Imagem codeXperience 2023"
      className="object-cover w-full h-full"
    />
  </div>

  );
}
