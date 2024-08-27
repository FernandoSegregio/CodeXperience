import rubeus from '@assets/rubeus.webp'
import uniAcademia from '@assets/uniLogo.webp'
import devOps from '@assets/devopsday.webp'
import techHub from '@assets/tech_hub.webp'
import pdfUrl from '../assets/SejaCode2024.pdf'


export default function Partners() {
  const devops = "https://devopsdays.org/events/2024-juiz-de-fora/welcome/"
  const tech = "https://techhubjf.org/"
  const rubeusUrl = "https://techhubjf.org/"
  const uniUrl = "https://www.uniacademia.edu.br/"

  return (
    <div id='6' className="w-full bg-black py-24 flex flex-col justify-center items-center gap-6 sm:gap-12">
      <h3 className="text-white text-center text-2xl sm:text-5xl">Veja abaixo nossos parceiros</h3>
      <h3 className="text-white text-center px-2 text-lg max-w-72 sm:text-4xl sm:max-w-7xl">Quer se juntar com quem faz o CodeXperience acontecer?</h3>
      <a className="text-center rounded-xl text-black py-4 px-6 text-xl bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out sm:p-4 md:text-3xl"
        href={pdfUrl} target="_blank" rel="noopener noreferrer"
      >Patrocine o melhor evento da região</a>

      <div className="md:max-w-7xl max-w-72 w-full flex flex-col gap-8 md:gap-16">
        <div className="w-full h-56 rounded-3xl flex items-center border md:h-96">
          <p className="text-[#0af40c] -rotate-90 w-48 h-[88px] -ml-10 flex justify-center items-center rounded-3xl text-xl md:text-4xl font-bold sm:-ml-8">
            PLATINA
          </p>
          <div className="w-2/3 flex flex-col justify-start py-2 sm:items-center sm:justify-center sm:flex-row sm:gap-8 sm:w-full sm:-ml-8">
            <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
              <img src={uniAcademia} alt="logo UniAcademia patrocinador platina" width={150} className="-ms-5 sm:w-[250px] sm:ms-0" />
            </a>
            <a href={rubeusUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
              <img src={rubeus} alt="logo Runeus patrocinador platina" width={120} className="sm:w-[350px] sm:pb-5" />
            </a>
          </div>
        </div>
        <div className="hidden flex-col sm:flex-row gap-8 md:gap-16 w-full">
          <div className="md:w-1/2 h-72 rounded-3xl flex items-center border">
            <p className="text-[#be73ed] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">OURO</p>
          </div>
          <div className="md:w-1/2 h-72 rounded-3xl flex items-center border">
            <p className="text-[#75fbfd] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">PRATA</p>
          </div>
        </div>
        <div className="flex-col md:flex-row gap-8 md:gap-16 max-w-7xl w-full">
          <div className="hidden md:w-1/2 h-56 rounded-3xl items-center border">
            <p className="text-[#5b8277] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">BRONZE</p>
          </div>
          <div className="w-full h-56 rounded-3xl flex items-center border">
            <p className="text-[#7fa7a8] -rotate-90 w-48 h-[88px] -ml-5 flex justify-center items-center rounded-3xl text-xl md:text-3xl  font-bold">PARCEIROS</p>
            <div className="w-full flex flex-col justify-start items-start py-8 sm:items-center sm:justify-center sm:flex-row sm:gap-8 sm:w-full sm:-ml-8">
              <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={devops}>
                <img src={devOps} alt="logo UniAcademia patrocinador platina" width={150} className="mt-5 sm:w-[300px] sm:ms-0 sm:mt-0" />
              </a>
              <a className='cursor-pointer' href={tech} target='_blank' rel="noopener noreferrer">
                <img src={techHub} alt="logo Runeus patrocinador platina" width={160} className="sm:w-[350px] sm:pb-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
