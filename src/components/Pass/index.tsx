import pass from '@assets/pass.webp'

export default function Pass() {
  return (
    <div id='3' className="relative py-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden sm:py-24">
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70"></div>

      <div className="md:max-w-7xl max-w-72 w-full flex flex-col items-center justify-center gap-8 md:gap-16 m-auto">
        <h3 className="z-10 text-white text-center text-2xl sm:text-5xl">O <span className='font-extrabold'>CodeXperience</span> é feito <span className='rounded-xl p-2 text-[#0af40c] font-extrabold'>desenvolvedor</span> pra <span className='rounded-xl p-2 text-[#75fbfd] font-extrabold'>desenvolvedor</span></h3>
        <div className='flex w-full justify-evenly flex-col sm:flex-row py-4 sm:py-12'>
          <img src={pass} alt="imagem simulando um ingresso" width={300} className="z-10 animate-kick -rotate-12 sm:w-1/2 sm:pb-5" />

          <ul className='z-10 text-white text-xl sm:text-3xl sm:space-y-3 pt-8 sm:pt-0'>
            <li>+10 horas de conteúdo</li>
            <li>+16 palestrantes</li>
            <li>workshops</li>
            <li>mini cursos</li>
            <li>open spaces</li>
            <li>hard skills</li>
            <li>soft skills</li>
            <li>network</li>
            <li>+150 pessoas envolvidas</li>
          </ul>

        </div>
        <a className="z-10 text-center rounded-xl text-black py-4 px-6 text-xl bg-[#0af40c] hover:bg-[#75fbfd] transition duration-1000 ease-in-out sm:p-4 md:text-3xl"
          href="https://www.sympla.com.br/evento/codexperience-zona-da-mata-2024/2600648" target="_blank" rel="noopener noreferrer"

        >Faça já sua inscrição</a>
      </div>


    </div>
  )
}
