import code from '@assets/code2023.webp';
import logoCode from '@assets/logo_code.png';




export default function Hero() {
  return (
    <div className="w-full h-[39rem] relative flex flex-col items-center justify-center">
      <img src={logoCode} className='absolute top-20 left-50 h-[600px] z-10' />

      <div className="absolute top-4 flex space-x-4 p-2 bg-gray-800 rounded-lg bg-opacity-30 z-10 gap-10">
        <div className="flex flex-col items-center bg-black bg-opacity-30 px-4 py-2 rounded-lg text-white w-40">
          Home
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 px-4 py-2 rounded-lg text-white w-40">
         Inscrições
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 px-4 py-2 rounded-lg text-white w-40">
        Programação
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 px-4 py-2 rounded-lg text-white">
          Eventos parceiros
        </div>
      </div>
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
