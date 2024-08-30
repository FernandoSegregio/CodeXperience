import logoCode from '@assets/logo_code.webp';
import logoCodeSmall from '@assets/codeSmall.webp';
import codeSmall from '@assets/small2023.webp';
import codeMedium from '@assets/medium2023.webp';
import codeLarge from '@assets/large2023.webp';
import Header from '@components/Header';

export default function Hero() {
  return (
    <div id='1' className="w-full h-[39rem] relative flex flex-col items-center justify-center">
      <img
        src={logoCodeSmall}
        srcSet={`${logoCodeSmall} 400w, ${logoCode} 600w`}
        sizes="(max-width: 640px) 400px, 600px"
        className='absolute h-48 left-50 z-50 sm:h-[220px] md:top-52 md:h-[300px]'
        alt="Logo Code"
      />

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
