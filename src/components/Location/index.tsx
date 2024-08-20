import logoLocation1 from '@assets/uniacademiaFachada.jpg'
import logoLocation2 from '@assets/uniacademiaPredios.jpg'

export default function Location() {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-12 md:py-20"
    id='local'
    >
      <h3 className="text-white md:text-6xl pt-2">O CodeXperience acontece na Uniacademia</h3>
      <h3 className="text-white md:text-5xl p-2 pb-8 md:pb-20">No coração de Juiz de Fora</h3>
      <div className='flex flex-col md:flex-row gap-12 md:gap-48'>
        <div className='md:w-1/2 flex flex-col gap-12 items-center'>
          <div className='bg-[#0af40c] px-4 w-64 py-28 rounded-3xl relative md:w-96 md:h-96'>
            <img src={logoLocation1} className='w-96 rounded-3xl absolute top-6 md:right-24 md:top-16' />
          </div>
          <div className='bg-[#75fbfd] px-4 w-64 py-28 rounded-3xl relative md:w-96 md:h-96'>
            <img src={logoLocation2} className='w-96 rounded-3xl absolute top-9 md:left-24 md:top-16' />
          </div>
        </div>

        <div className='md:w-1/2 flex flex-col items-center'>
          <div className='bg-[#be73ed] w-64 h-64 md:px-16 md:pt-20 rounded-3xl relative md:w-[400px] md:h-[480px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.456636805489!2d-43.35566702395272!3d-21.762581180076804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b61e5bb4d59%3A0xab281c69be317217!2sCol%C3%A9gio%20Cristo%20Redentor%20-%20Academia%20de%20Com%C3%A9rcio!5e0!3m2!1spt-BR!2sbr!4v1724085130301!5m2!1spt-BR!2sbr"
              width="400"
              height="700"
              style={{ border: 0 }}
              loading="lazy"
              className='w-56 h-56 absolute rounded-xl -top-4 left-4 md:w-[400px] md:h-[530px] md:top-16 md:left-20'
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
