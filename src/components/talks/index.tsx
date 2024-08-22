import ava1 from '@assets/avatar1.svg'
import ava2 from '@assets/avatar2.svg'
import ava3 from '@assets/avatar3.svg'
import ava4 from '@assets/avatar4.svg'
import ava5 from '@assets/avatar5.svg'
import ava6 from '@assets/avatar6.svg'


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

    <div className='h-full w-full flex flex-col items-center bg-black pt-24 sm:pt-48 pb-12 gap-8 sm:gap-12'>
      <h3 className="text-white text-center text-2xl sm:text-5xl">Está preparado?</h3>
      <h3 className="text-white text-center px-2 text-lg sm:text-4xl md:max-w-5xl">Deem só uma olhada nas feras que irão compartilhar seus conhecimento com a gente!</h3>
      <a className="text-center md:text-3xl rounded-xl text-black p-2 px-6 sm:p-4 bg-[#0af40c] hover:bg-[#be73ed] hover:text-white transition duration-1000 ease-in-out sm:mt-3"
        href={URL_PAPER} target="_blank" rel="noopener noreferrer"
      >Quer trazer conteúdo?<br /> Chega mais!</a>
      <div className='my-10 h-2/3 max-w-72 flex items-center justify-center gap-16 flex-wrap md:max-w-7xl'>
        {talkers.map((talk) => (
          <>
            <div className='space-y-8'>
              <div key={talk.id} className='w-48 h-48 rounded-full border-green-500 overflow-hidden border-4 p-6'>
                <img src={talk.talker} className='w-full h-full object-cover mt-6' />
              </div>
              <p className='bg-green-500 py-1 px-6 rounded-lg text-center'>{talk.name} {talk.id}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
