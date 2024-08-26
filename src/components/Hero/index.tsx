import code from '@assets/code2023.webp';
import logoCode from '@assets/logo_code.webp';
import Header from '@components/Header';

export default function Hero() {
  return (
    <div id='1' className="w-full h-[39rem] relative flex flex-col items-center justify-center">
      <img
        src={logoCode}
        className='absolute md:top-20 left-50 md:h-[600px] z-10'
        alt="Logo Code"
      />
      <Header />
      <div className='bg-black w-full h-full absolute opacity-60'></div>
      <img
        src={code}  // Usado como fallback
        srcSet="src/assets/code2023.webp?t=172 600w, src/assets/code2023.webp?t=172 1200w, src/assets/code2023.webp?t=172 1800w"
        sizes="(max-width: 600px) 100vw, 50vw"
        alt="Descrição da imagem"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
