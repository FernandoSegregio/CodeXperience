import ava1 from '@assets/avatar1.svg'
import ava2 from '@assets/avatar2.svg'
import ava3 from '@assets/avatar3.svg'
import ava4 from '@assets/avatar4.svg'
import ava5 from '@assets/avatar5.svg'
import ava6 from '@assets/avatar6.svg'
import Carousel from '@components/Carroussel'


export const talkers: Talker[] = [
  { talker: ava1, id: 1, name: 'Fulano' },
  { talker: ava2, id: 2, name: 'Fulano' },
  { talker: ava1, id: 3, name: 'Fulano' },
  { talker: ava3, id: 4, name: 'Fulano' },
  { talker: ava2, id: 5, name: 'Fulano' },
  { talker: ava4, id: 6, name: 'Fulano' },
  { talker: ava2, id: 7, name: 'Fulano' },
  { talker: ava5, id: 8, name: 'Fulano' },
  { talker: ava6, id: 9, name: 'Fulano' },
  { talker: ava1, id: 10, name: 'Fulano' },
];

interface Talker {
  name: string;
  talker: string;
  id: number;
}

export default function Talks() {

  const URL_PAPER = 'https://www.papercall.io/codexperience-zona-da-mata-2024'
  return (

    <div id='2' className='h-full w-full flex flex-col items-center bg-black pt-20 sm:py-40 pb-12 gap-4 sm:gap-16'>
      <div className='space-y-4 flex justify-center flex-col'>
        <h3 className="text-white text-center text-2xl font-extrabold sm:text-6xl pb-6">Estão preparados?</h3>
        <h3 className="text-center text-2xl font-extrabold sm:text-7xl pb-4 sm:pb-16 sm:pt-8 text-[#0af40c]">09/11/2024</h3>
        <h3 className="text-white text-center text-2xl max-w-72 sm:text-start sm:text-5xl md:max-w-7xl">
          Palestras, mini cursos, workshops, open spaces,</h3>
        <h3 className="text-white text-center max-w-64 text-2xl sm:text-5xl sm:text-start md:max-w-7xl">network, e muito mais...</h3>
        <h3 className="text-[#be73ed] text-center text-2xl sm:text-6xl sm:text-end md:max-w-7xl pt-6 font-extrabold">Tudo isso em um só lugar!</h3>
      </div>
      <h3 className="text-white text-center px-2 text-lg sm:text-4xl max-w-72  md:max-w-5xl">Deem só uma olhada nas feras que compartilharam conhecimento com a gente em 2023!</h3>
      <Carousel />
      <h3 className="leading-loose text-white text-center max-w-72 px-2 text-xl sm:text-4xl md:max-w-4xl">Tem interesse em compartilhe com a gente no <span className='font-extrabold'>CodeXperience</span> 2024?</h3>
      <a className="text-center rounded-xl text-black py-4 px-6 text-xl md:text-3xl bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out sm:-mt-4"
        href={URL_PAPER} target="_blank" rel="noopener noreferrer"
      >Chega mais</a>
      <div className='hidden my-10 h-2/3 max-w-72 items-center justify-center gap-16 flex-wrap md:max-w-7xl'>
        {talkers.map((talk) => (
          <div className='space-y-8' key={talk.id}>
            <div className='w-48 h-48 rounded-full border-green-500 overflow-hidden border-4 p-6'>
              <img src={talk.talker} className='w-full h-full object-cover mt-6' />
            </div>
            <p className='bg-green-500 py-1 px-6 rounded-lg text-center'>{talk.name} {talk.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
