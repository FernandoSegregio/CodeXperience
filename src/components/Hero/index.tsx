import code from '@assets/code2023.webp';
import logoCode from '@assets/logo_code.png';
import Header from '@components/Header';




export default function Hero() {
  return (
    <div id='home' className="w-full h-[30rem] relative flex flex-col items-center justify-center md:h-[39rem]">
      <img src={logoCode} className='absolute md:top-20 left-50 md:h-[600px] z-10' />
      <Header />
      <div className='bg-black w-full h-full absolute opacity-60'></div>
      <img
        src={code}
        className="w-full h-full object-cover"
        alt="Logo codeXperience"
        aria-description='foto evento ano anterior'
      />
    </div>
  );
}
