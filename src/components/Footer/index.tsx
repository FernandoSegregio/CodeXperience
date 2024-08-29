

import logoCode from '@assets/logo_code.webp'
import logoInsta from '@assets/insta.svg'
import logoLinkedin from '@assets/linkedin.svg'
import logoDisc from '@assets/disc.svg'

export default function Footer() {

  const URL_LINKEDIN = 'https://www.linkedin.com/company/code-experience/'
  const URL_INSTAGRAM = 'https://www.instagram.com/codexperiencezonadamata/'
  const URL_DISC = 'https://discord.gg/pv8GgT2T'

  return (
    <div className='w-full flex flex-col justify-center items-center py-12 md:py-24 bg-black text-white gap-4 lg:flex-row lg:gap-36'>

      <div className='flex flex-col justify-center items-center pb-12 gap-2'>
        <img className='sm:w-[260px] sm:h-[207px]' src={logoCode} alt='Logo codeXperience' width={220} />
        <div className='flex gap-3 justify-center items-center mt-2 md:mt-4 md:gap-5'>
          <a href={URL_INSTAGRAM} rel="noopener noreferrer">
            <img src={logoInsta} alt="instagram codeXperience" width={24} height={24} className='md:w-12' />
          </a>
          <a href={URL_LINKEDIN} target='_blank' rel="noopener noreferrer">
            <img src={logoLinkedin} alt="logoLinkedin codeXperience" width={28} height={26} className='md:w-14' />
          </a>
          <a href={URL_DISC} target='_blank' rel="noopener noreferrer">
            <img src={logoDisc} alt="logoLinkedin codeXperience" width={24} height={20} className='md:w-12' />
          </a>
        </div>
        <p className='text-sm md:pt-2'>CodeXperience ®</p>
      </div>
      <iframe
        src="https://www.instagram.com/codexperiencezonadamata/embed"
        title="feed Instragram CodeXperience"
        width="300"
        height="360"
        frameBorder="0"
        scrolling="no"
        loading='lazy'
        className='rounded-lg md:w-96 md:h-96'
      ></iframe>
    </div>
  )
}
