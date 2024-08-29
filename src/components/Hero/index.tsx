import code from '@assets/code2023.webp';
import logoCode from '@assets/logo_code.webp';
import Header from '@components/Header';

export default function Hero() {
  return (
    <div id='1' className="w-full h-[39rem] relative flex flex-col items-center justify-center">
      <img
        src={logoCode}
        className='absolute md:top-20 left-50 md:h-[600px] z-50'
        alt="Logo Code"
      />
      <Header />
      <div className='bg-black w-full h-full absolute opacity-60'></div>
      <img
        src={code}
        sizes="(max-width: 600px) 100vw, 50vw"
        alt="Descrição da imagem"
        loading='eager' 
        className="object-cover w-full h-full"
      />
    </div>
  );
}
