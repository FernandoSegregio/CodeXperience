export default function Partners() {

  const uniAcademia = 'https://cdn.prod.website-files.com/5ce2e8de2575f22e2c7815e4/5ebc4aaff588667d03110347_Prancheta%2030%20c%C2%A2pia%2032.png'

  return (
    <div className="w-full bg-black py-24 flex flex-col justify-center items-center gap-6 sm:gap-12">
      <h3 className="text-white text-center text-2xl sm:text-5xl">Veja abaixo nossos parceiros</h3>
      <h3 className="text-white text-center px-2 text-lg sm:text-4xl">Quer se juntar com quem faz o CodeXperience acontecer?</h3>
      <a className="text-center md:text-3xl rounded-xl text-black p-2 sm:p-4 bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out"
        href="/SejaCode2024.pdf" target="_blank" rel="noopener noreferrer"
      >Patrocine o melhor evento da região</a>

      <div className="md:max-w-7xl max-w-72 w-full flex flex-col gap-8 md:gap-16">
        <div className="w-full h-96 rounded-3xl flex items-center border">
          <p className="text-[#0af40c] -rotate-90 w-48 h-[88px] -ml-10 flex justify-center items-center rounded-3xl text-xl md:text-4xl font-bold">
            PLATINA
          </p>
          <div className="w-2/3 flex justify-start py-2 items-start">
            <img src={uniAcademia} alt="logo UniAcademia patrocinador platina" width={150} className="sm:w-[276px]" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full">
          <div className="md:w-1/2 h-72 rounded-3xl flex items-center border">
            <p className="text-[#be73ed] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">OURO</p>
          </div>
          <div className="md:w-1/2 h-72 rounded-3xl flex items-center border">
            <p className="text-[#75fbfd] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">PRATA</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-7xl w-full">
          <div className="md:w-1/2 h-56 rounded-3xl flex items-center border">
            <p className="text-[#5b8277] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl ext-xl md:text-4xl  font-bold">BRONZE</p>
          </div>
          <div className="md:w-1/2 h-56 rounded-3xl flex items-center border">
            <p className="text-[#7fa7a8] -rotate-90 w-48 h-[88px] -ml-14 flex justify-center items-center rounded-3xl text-xl md:text-3xl  font-bold">PARCEIROS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
