import rubeus from '@assets/rubeus.webp'
import rubeusSmall from '@assets/rubeusSmall.webp'
import uniAcademia from '@assets/uniLogo.webp'
import uniAcademiaSmall from '@assets/uniSmall.webp'
import devOps from '@assets/devopsday.webp'
import elastic from '@assets/elastic.webp'
import elasticSmall from '@assets/elastic.webp'
import m3Oculos from '@assets/m3oculos.webp'
import m3OculosSmall from '@assets/m3oculos.webp'
import cafeDasMinas from '@assets/cafe-das-minas.webp'
import cafeDasMinasSmall from '@assets/cafe-das-minas.webp'
import medeirosGourmetBuffet from '@assets/medeiros-gourmet-buffet.webp'
import medeirosGourmetBuffetSmall from '@assets/medeiros-gourmet-buffet.webp'
import techHub from '@assets/tech_hub.webp'
import devOpsSmall from '@assets/devopsSmall.webp'
import techHubSmall from '@assets/tech_hubSmall.webp'

import avatar from '@assets/patrocinadores/avatar-2.webp'

export default function Partners() {

  const devops = "https://devopsdays.org/events/2024-juiz-de-fora/welcome/"
  const elasticUrl = "https://www.elastic.co/"
  const m3OculosUrl = "https://m3oculos.com.br/"
  const medeirosGourmetBuffetUrl = "https://www.instagram.com/medeirosgourmetbuffet/"
  const cafeDasMinasUrl = "https://www.instagram.com/cafe_das_minas/"
  const tech = "https://techhubjf.org/"
  const rubeusUrl = "https://rubeus.com.br/"
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
        <div className="w-full rounded-3xl flex items-center border">
          <p className="text-[#0af40c] -rotate-90 w-48 h-[88px] -ml-10 flex justify-center items-center rounded-3xl text-xl md:text-4xl font-bold lg:-ml-8">
            PLATINA
          </p>
          <div className='my-10 mx-10 h-2/3 max-w-72 items-center justify-center flex flex-wrap gap-16 md:max-w-7xl'>
            <div>
              <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={avatar}
                  srcSet={`${avatar} 150w, ${avatar} 250w`}
                  sizes="(max-width: 640px) 150px, 250px"
                  alt="logo UniAcademia patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div>
            <div>
              <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={avatar}
                  srcSet={`${avatar} 150w, ${avatar} 250w`}
                  sizes="(max-width: 640px) 150px, 250px"
                  alt="logo UniAcademia patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div><div>
              <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={avatar}
                  srcSet={`${avatar} 150w, ${avatar} 250w`}
                  sizes="(max-width: 640px) 150px, 250px"
                  alt="logo UniAcademia patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div>
            {/* <div>
              <a href={uniUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={avatar}
                  srcSet={`${uniAcademiaSmall} 150w, ${uniAcademia} 250w`}
                  sizes="(max-width: 640px) 150px, 250px"
                  alt="logo UniAcademia patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div>
            <div>
              <a href={rubeusUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={rubeusSmall}
                  srcSet={`${rubeusSmall} 126w, ${rubeus} 350w`}
                  sizes="(max-width: 640px) 126px, 350px"
                  alt="logo Rubeus patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div>
            <div>
              <a href={m3OculosUrl} className='cursor-pointer' target='_blank' rel="noopener noreferrer">
                <img
                  src={m3OculosSmall}
                  srcSet={`${m3OculosSmall} 126w, ${m3Oculos} 350w`}
                  sizes="(max-width: 640px) 126px, 350px"
                  alt="logo M3oculos patrocinador platina"
                  className="mt-5 sm:max-w-[350px] sm:max-h-[250px] sm:ms-0 sm:mt-0"
                />
              </a>
            </div>*/}

          </div>
        </div>
        <div className="flex-col md:flex-row gap-8 md:gap-16 max-w-7xl w-full">
          <div className="w-full rounded-3xl flex items-center border">
            <p className="text-[#7fa7a8] -rotate-90 w-48 -ml-5 flex justify-center items-center rounded-3xl text-xl md:text-3xl  font-bold">PARCEIROS</p>
            <div className='my-10 mx-10 h-2/3 max-w-72 items-center justify-center flex flex-wrap gap-16 md:max-w-7xl'>

              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={avatar}
                    srcSet={`${avatar} 150w, ${avatar} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={avatar}
                    srcSet={`${avatar} 150w, ${avatar} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={avatar}
                    srcSet={`${avatar} 150w, ${avatar} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={avatar}
                    srcSet={`${avatar} 150w, ${avatar} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={avatar}
                    srcSet={`${avatar} 150w, ${avatar} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              {/*<div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={elasticUrl}>
                  <img
                    src={elasticSmall}
                    srcSet={`${elasticSmall} 150w, ${elastic} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Elastic parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={devops}>
                  <img
                    src={devOpsSmall}
                    srcSet={`${devOpsSmall} 150w, ${devOps} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo DevOpsDays JF parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' href={tech} target='_blank' rel="noopener noreferrer">
                  <img
                    src={techHubSmall}
                    srcSet={`${techHubSmall} 160w, ${techHub} 350w`}
                    sizes="(max-width: 640px) 160px, 350px"
                    alt="logo Tech Hub parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' href={cafeDasMinasUrl} target='_blank' rel="noopener noreferrer">
                  <img
                    src={cafeDasMinasSmall}
                    srcSet={`${cafeDasMinasSmall} 160w, ${cafeDasMinas} 350w`}
                    sizes="(max-width: 640px) 160px, 350px"
                    alt="logo Café das Minas parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>
              <div>
                <a className='cursor-pointer' target='_blank' rel="noopener noreferrer" href={medeirosGourmetBuffetUrl}>
                  <img
                    src={medeirosGourmetBuffetSmall}
                    srcSet={`${medeirosGourmetBuffetSmall} 150w, ${medeirosGourmetBuffet} 300w`}
                    sizes="(max-width: 640px) 150px, 300px"
                    alt="logo Medeiros Gourmet Buffet parceiro"
                    className="mt-5 sm:max-w-[250px] sm:max-h-[150px] sm:ms-0 sm:mt-0"
                  />
                </a>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
