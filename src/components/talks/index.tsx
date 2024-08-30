import Carousel from '@components/Carroussel'

export default function Talks() {

  const URL_PAPER = 'https://www.papercall.io/codexperience-zona-da-mata-2024'
  return (
    <div id='2' className='h-full w-full flex flex-col items-center bg-black pt-20 sm:py-40 pb-12 gap-4 sm:gap-16'>
      <div className='space-y-4 flex justify-center flex-col max-w-xl lg:max-w-7xl'>
        <h3 className="text-white text-center text-2xl font-extrabold sm:text-6xl pb-6">Estão preparados?</h3>
        <h3 className="text-center text-2xl font-extrabold sm:text-7xl pb-4 sm:pb-16 sm:pt-8 text-[#0af40c]">09/11/2024</h3>
        <h3 className="text-white text-center text-2xl max-w-72 lg:text-start sm:text-5xl md:max-w-7xl">
          Palestras, mini cursos, workshops, open spaces,</h3>
        <h3 className="text-white text-center max-w-64 text-2xl sm:text-5xl lg:text-start md:max-w-7xl">network, e muito mais...</h3>
        <h3 className="text-[#be73ed] text-center text-2xl sm:text-6xl lg:text-end md:max-w-7xl pt-6 font-extrabold">Tudo isso em um só lugar!</h3>
      </div>
      <h3 className="text-white text-center px-2 text-lg sm:text-4xl max-w-72 sm:max-w-xl lg:max-w-5xl">Deem só uma olhada nas feras que compartilharam conhecimento com a gente em 2023!</h3>
      <Carousel />
      <h3 className="leading-loose text-white text-center max-w-72 px-2 text-xl sm:text-4xl md:max-w-xl lg:max-w-4xl">Tem interesse em compartilhe com a gente no <span className='font-extrabold'>CodeXperience</span> 2024?</h3>
      <a className="text-center rounded-xl text-black py-4 px-6 text-xl md:text-3xl bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out sm:-mt-4"
        href={URL_PAPER} target="_blank" rel="noopener noreferrer"
      >Chega mais</a>
    </div>
  );
}
