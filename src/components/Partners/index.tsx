import rubeus from '@assets/rubeus.webp'
import rubeusSmall from '@assets/rubeusSmall.webp'
import uniAcademia from '@assets/uniLogo.webp'
import uniAcademiaSmall from '@assets/uniSmall.webp'
import devOps from '@assets/devopsday.webp'
import techHub from '@assets/tech_hub.webp'
import devOpsSmall from '@assets/devopsSmall.webp'
import techHubSmall from '@assets/tech_hubSmall.webp'


export default function Partners() {
  const devops = "https://devopsdays.org/events/2024-juiz-de-fora/welcome/"
  const tech = "https://discord.gg/pv8GgT2T"
  const rubeusUrl = "https://techhubjf.org/"
  const uniUrl = "https://www.uniacademia.edu.br/"
  const pdfUrl = "https://drive.google.com/file/d/1r5g3w35pHYmwihWb2_CaHu-KhT76XdjZ/view?usp=sharing"

  return (
    <div id='6' className="w-full bg-black py-24 flex flex-col justify-center items-center gap-8 sm:gap-12">
      <h3 className="text-white text-center text-2xl sm:text-5xl lg:max-w-7xl">Veja abaixo nossos parceiros</h3>
      <h3 className="text-white text-center px-2 text-lg max-w-72 sm:max-w-xl sm:text-4xl lg:max-w-7xl">Quer se juntar com quem faz o CodeXperience acontecer?</h3>
      <h3 className="text-white text-center px-2 text-lg max-w-80 sm:max-w-xl sm:text-4xl lg:max-w-7xl">Clique no botão abaixo, ou entre em contato pelo email <a className='font-bold' href="mailto:o email é: codexperiencezonadamata@gmail.com">codexperiencezonadamata@gmail.com</a></h3>
      <a className="text-center rounded-xl w-72 text-black py-2 px-8 text-xl bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out sm:px-12 sm:py-4 sm:w-96 md:text-3xl"
        href={pdfUrl} target="_blank" rel="noopener noreferrer"
      >Patrocine o melhor evento da região</a>

      <div className="max-w-72 w-full flex flex-col gap-8 sm:max-w-xl lg:gap-16 lg:max-w-7xl">
        <div className="w-full h-56 rounded-3xl flex items-center border md:h-96">
          <p className="text-[#0af40c] -rotate-90 w-48 h-[88px] -ml-10 flex justify-center items-center rounded-3xl text-xl md:text-4xl font-bold lg:-ml-8">
            PLATINA
          </p>
          <div className="w-2/3 flex flex-col justify-start py-2 sm:gap-2 sm:items-center sm:justify-center sm:flex-row sm:-ml-5 lg:gap-8 lg:w-full lg:-ml-8">
            <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
              <img
                src={uniAcademiaSmall}
                srcSet={`${uniAcademiaSmall} 150w, ${uniAcademia} 250w`}
                sizes="(max-width: 640px) 150px, 250px"
                alt="logo UniAcademia patrocinador platina"
                width={150}
                height={129}
                className="-ms-5 sm:w-[320px] sm:ms-0 lg:w-[250px] lg:h-[215px]"
              />
            </a>
            <a href={rubeusUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
              <img
                src={rubeusSmall}
                srcSet={`${rubeusSmall} 126w, ${rubeus} 350w`}
                sizes="(max-width: 640px) 126px, 350px"
                alt="logo Runeus patrocinador platina"
                width={126}
                height={34}
                className="sm:pb-5 sm:w-[350px] lg:h-[113.5px]"
              />
            </a>

          </div>
        </div>
        <div className="flex-col md:flex-row gap-8 md:gap-16 max-w-7xl w-full">
          <div className="w-full h-56 rounded-3xl flex items-center border">
            <p className="text-[#7fa7a8] -rotate-90 w-48 h-[88px] -ml-5 flex justify-center items-center rounded-3xl text-xl md:text-3xl  font-bold">PARCEIROS</p>
            <div className="w-full flex flex-col justify-start items-start py-8 sm:items-center sm:justify-center sm:flex-row lg:gap-8 sm:w-full sm:-ml-8">
              <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={devops}>
                <img
                  src={devOpsSmall}
                  srcSet={`${devOpsSmall} 150w, ${devOps} 300w`}
                  sizes="(max-width: 640px) 150px, 300px"
                  alt="logo UniAcademia patrocinador platina"
                  width={150}
                  height={44}
                  className="mt-5 sm:w-[300px] sm:h-[88px] sm:ms-0 sm:mt-0"
                />
              </a>
              <a className='cursor-pointer' href={tech} target='_blank' rel="noopener noreferrer">
                <img
                  src={techHubSmall}
                  srcSet={`${techHubSmall} 160w, ${techHub} 350w`}
                  sizes="(max-width: 640px) 160px, 350px"
                  alt="logo Runeus patrocinador platina"
                  width={160}
                  height={82}
                  className="sm:w-[350px] sm:h-[198px] lg:pb-5"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
