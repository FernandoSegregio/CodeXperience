import pass from '@assets/pass.webp'

export default function Pass() {
  return (
    <div id='3' className="relative py-16 bg-black sm:py-24">
      <div className="max-w-72 w-full flex flex-col items-center justify-center gap-8 m-auto sm:max-w-2xl md:gap-16 lg:max-w-7xl">
        <h3 className="z-10 text-white text-center text-2xl sm:text-5xl">O <span className='font-extrabold'>CodeXperience</span> é feito de <span className='rounded-xl p-2 text-[#0af40c] font-extrabold'>desenvolvedor</span> para <span className='rounded-xl p-2 text-[#75fbfd] font-extrabold'>desenvolvedor</span></h3>
        <div className='flex w-full justify-evenly flex-col items-center lg:flex-row py-4 sm:py-12'>
          <img src={pass} alt="imagem simulando um ingresso" width={300} height={162} loading="lazy" className="z-10 animate-kick -rotate-12 sm:pb-5 sm:w-[315px] sm:h-[217px]  lg:w-[550px] lg:h-[327px]" />
          <ul className='z-10 text-white text-xl sm:text-3xl pt-8 sm:space-y-3  lg:pt-0'>
            <li>+10 horas de conteúdo</li>
            <li>+10 palestrantes</li>
            <li>workshops</li>
            {/*<li>mini cursos</li>*/}
            <li>open spaces</li>
            <li>hard skills</li>
            <li>soft skills</li>
            <li>network</li>
            <li>+200 pessoas envolvidas</li>
          </ul>
        </div>
        <a className="z-10 text-center rounded-xl text-black py-4 px-6 text-xl bg-[#0af40c] hover:bg-[#75fbfd] transition duration-1000 ease-in-out sm:p-4 md:text-3xl"
          href="https://www.sympla.com.br/evento/codexperience-zona-da-mata-2025/3113294" target="_blank" rel="noopener noreferrer"
        >Faça já sua inscrição</a>
      </div>
    </div>
  )
}
