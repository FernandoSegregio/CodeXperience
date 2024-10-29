import ava11 from '@assets/palestrantes/11.png'
import ava12 from '@assets/palestrantes/12.png'
import ava13 from '@assets/palestrantes/13.png'
import ava14 from '@assets/palestrantes/14.png'
import ava15 from '@assets/palestrantes/15.png'
import ava16 from '@assets/palestrantes/16.png'
import ava17 from '@assets/palestrantes/17.png'
import ava18 from '@assets/palestrantes/18.png'
import ava19 from '@assets/palestrantes/19.png'
import ava2 from '@assets/palestrantes/2.png'
import ava20 from '@assets/palestrantes/20.png'
import ava3 from '@assets/palestrantes/3.png'
import ava4 from '@assets/palestrantes/4.png'
import ava5 from '@assets/palestrantes/5.png'
import ava6 from '@assets/palestrantes/6.png'
import ava7 from '@assets/palestrantes/7.png'
import ava8 from '@assets/palestrantes/8.png'
import ava9 from '@assets/palestrantes/9.png'



export const talkers: Talker[] = [
  { talker: ava18, id: 18, name: 'Arthur Avelar', link: 'https://www.linkedin.com/in/arthur-avelar/'},
  { talker: ava2, id: 2, name: 'Cíntia Esteves', link: 'https://www.linkedin.com/in/cintia-esteves/'},
  { talker: ava4, id: 4, name: 'Brendo Freitas', link: 'https://www.linkedin.com/in/brendo-f-00b75416a/'},
  { talker: ava5, id: 5, name: 'Camila Castro', link: 'https://www.linkedin.com/in/camilancastro/'},
  { talker: ava6, id: 6, name: 'Daniele Garcia', link: 'https://www.linkedin.com/in/danielegarciadecastroalves/'},
  { talker: ava7, id: 7, name: 'Danilo Santos', link: 'https://www.linkedin.com/in/danilo-oliveira-santos/'},
  { talker: ava8, id: 8, name: 'Emerson Pombo', link: 'https://www.linkedin.com/in/emerson-pombo/'},
  { talker: ava9, id: 9, name: 'Fabrício Lima', link: 'https://linkedin.com/in/fabriciooml/'},
  { talker: ava12, id: 12, name: 'Higor e Maykon', link: 'https://www.linkedin.com/posts/code-experience_codexperiencezonadamata-activity-7250119616838991872-z_TA?utm_source=share&utm_medium=member_desktop'},
  { talker: ava13, id: 13, name: 'Humberto Almeida', link: 'https://www.linkedin.com/in/humbertosalesdealmeida/'},
  { talker: ava11, id: 11, name: 'Igor Nascimento', link: 'https://www.linkedin.com/in/igor-nascimento-a76a29155/'},
  { talker: ava14, id: 14, name: 'João Medina', link: 'https://www.linkedin.com/in/joaomedinadev/'},
  { talker: ava19, id: 19, name: 'Nathan Vasconcellos', link: 'https://www.linkedin.com/in/nathan-vasconcellos-92153a63/'},
  { talker: ava15, id: 15, name: 'Rafael Brasil', link: 'https://www.linkedin.com/in/rblima/'},
  { talker: ava20, id: 20, name: 'Rafael Machado', link: 'https://www.linkedin.com/in/rafaelrpmachado/'},
  { talker: ava16, id: 16, name: 'Rafael Rocha', link: 'https://www.linkedin.com/in/rafael-rocha-ribeiro-581bb2202/'},
  { talker: ava3, id: 3, name: 'Paulo Cerqueira', link: 'https://www.linkedin.com/in/phcerqueira/'},
  { talker: ava17, id: 17, name: 'Tiago Gouvêa', link: 'https://www.linkedin.com/in/tiagogouvea/'},
];
interface Talker {
  name: string;
  talker: string;
  id: number;
  link: string;
}

export default function Talks() {
  return (
    <div id='2' className='h-full w-full flex flex-col items-center bg-black pt-20 pb-8 gap-4 sm:gap-16'>
      <div className='space-y-4 flex justify-center flex-col max-w-xl lg:max-w-7xl'>
        <h3 className="text-white text-center text-2xl font-extrabold sm:text-6xl pb-6">Estão preparados?</h3>
       
      </div>
      <h3 className="text-white text-center px-2 text-x sm:text-6xl max-w-72 sm:max-w-xl lg:max-w-5xl">
        Essas são feras que vão compartilhar conhecimento com a gente!
        </h3>
     
      <div className='my-10 h-2/3 max-w-72 items-center justify-center flex flex-wrap gap-16 md:max-w-7xl'>
        {talkers.map((talk) => (
          <div>
          <a href={talk.link} key={talk.id} target='_blank' rel="noopener noreferrer" className='space-y-4'>
            <div className='w-60 h-56 rounded-xl border-green-500 overflow-hidden border-4 p-6'>
              <img src={talk.talker} className='w-full h-full object-cover -mt-2 scale-[1.35]' />
            </div>
            <p className='bg-green-500 py-1 px-6 rounded-lg text-center'>{talk.name}</p>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}

