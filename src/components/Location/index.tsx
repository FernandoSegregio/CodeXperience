import location1 from '@assets/uni1.webp'
import location2 from '@assets/uni2.webp'

export default function Location() {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-12 sm:py-40"
      id='5'
    >
      <h3 className="text-white max-w-72 text-2xl text-center pt-2 md:text-6xl md:max-w-xl lg:max-w-7xl">O CodeXperience acontece na UniAcademia,</h3>
      <h3 className="text-white max-w-72 text-xl p-2 pb-8  md:text-5xl md:pb-20 sm:max-w-7xl">no coração de Juiz de Fora!</h3>
      <div className='flex flex-col gap-12 lg:flex-row lg:gap-48 sm:items-center'>
        <div className='md:w-1/2 flex flex-col gap-12 items-center'>
          <div className='bg-[#0af40c] px-4 w-64 py-28 rounded-3xl relative md:w-96 md:h-96'>
            <img src={location1} className='w-96 rounded-3xl absolute top-6 md:right-24 md:top-16' alt='fachada UniAcademia' />
          </div>
          <div className='bg-[#75fbfd] px-4 w-64 py-28 rounded-3xl relative md:w-96 md:h-96'>
            <img src={location2} className='w-96 rounded-3xl absolute top-9 -left-4 md:left-24 md:top-16' alt='predio de salas UniAcademia' />
          </div>
        </div>

        <div className='md:w-1/2 flex flex-col items-center'>
          <div className='bg-[#be73ed] w-64 h-56 rounded-3xl relative sm:px-8 sm:pt-10 sm:w-96 sm:h-[480px] lg:px-16 lg:pt-20 lg:w-[400px] lg:h-[480px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.456636805489!2d-43.35566702395272!3d-21.762581180076804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b61e5bb4d59%3A0xab281c69be317217!2sCol%C3%A9gio%20Cristo%20Redentor%20-%20Academia%20de%20Com%C3%A9rcio!5e0!3m2!1spt-BR!2sbr!4v1724085130301!5m2!1spt-BR!2sbr"
              width="400"
              height="700"
              style={{ border: 0 }}
              loading="lazy"
              title="Mapa de localização do evento no google maps"
              className='w-56 h-56 absolute rounded-3xl -top-4 left-4 sm:w-80 sm:h-96 sm:top-12 sm:left-8 lg:w-[400px] lg:h-[530px] lg:top-16 lg:left-20'
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
