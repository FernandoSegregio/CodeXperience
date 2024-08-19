import logoLocation1 from '@assets/uniacademiaFachada.jpg'
import logoLocation2 from '@assets/uniacademiaPredios.jpg'

export default function Location() {
  return (
    <div className="bg-black flex flex-col items-center justify-center py-20">
      <h3 className="text-white text-6xl pt-2">O CodeXperience acontece na Uniacademia</h3>
      <h3 className="text-white text-5xl p-2 pb-20">No coração de Juiz de Fora</h3>
      <div className='flex gap-48'>
        <div className='w-1/2 flex flex-col gap-12'>
          <div className='bg-[#0af40c] px-4 w-96 py-24 rounded-3xl relative h-96'>
            <img src={logoLocation1} className='w-96 rounded-3xl absolute right-24' />
          </div>
          <div className='bg-[#75fbfd] p-4 py-20 w-96 rounded-3xl relative h-80'>
            <img src={logoLocation2} className='w-96 rounded-3xl absolute left-24 top-12' />
          </div>
        </div>

        <div className='w-1/2 flex flex-col items-center'>
          <div className='bg-[#be73ed] px-16 pt-20 rounded-3xl relative w-[400px] h-[600px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.456636805489!2d-43.35566702395272!3d-21.762581180076804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b61e5bb4d59%3A0xab281c69be317217!2sCol%C3%A9gio%20Cristo%20Redentor%20-%20Academia%20de%20Com%C3%A9rcio!5e0!3m2!1spt-BR!2sbr!4v1724085130301!5m2!1spt-BR!2sbr"
              width="400"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              className='absolute'
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
