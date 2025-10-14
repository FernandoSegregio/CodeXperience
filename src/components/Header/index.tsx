import logoMenuIcon from '@assets/icon-menu.svg'
import { Disclosure, Transition } from '@headlessui/react'
import classNames from '@utils/classNames'
import { Fragment, useEffect, useState } from 'react'
import { sectionsLP } from './mocks'

export default function Header() {
  const [scroll, setScroll] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 30;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <Disclosure as="nav" className={
      classNames(scroll ? 'backdrop-blur-sm bg-black/10 sm:bg-transparent transition duration-600 ease-in-out flex justify-end lg:justify-center' : 'scroll', 'w-full fixed z-50 top-0')}
    >
      {({ open, close }) => (
        <>
          <div>
            <div className="flex h-24 items-center justify-end lg:justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                {/* ✅ BOTÃO MOBILE */}
                <div className="block lg:hidden mr-2">
                  <a
                    href="https://codexperience.com.br/2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md shadow-md text-sm hover:opacity-90 transition-all"
                  >
                    🚀 Veja como foi a EDIÇÃO 2024
                  </a>
                </div>
                {/* ✅ MENU DESKTOP */}
                <div className="hidden lg:block">
                  <ul
                    className={classNames(
                      scroll ? "backdrop-blur-sm bg-black/10 " : "",
                      "top-4 flex space-x-4 p-2 bg-gray-800 rounded-lg bg-opacity-20 z-10"
                    )}
                  >
                    {/* Botão Desktop */}
                    <li>
                      <a
                        href="https://codexperience.com.br/2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all"
                      >
                        🚀 Veja como foi a EDIÇÃO 2024
                      </a>
                    </li>

                    {/* Itens do menu */}
                    {sectionsLP.map((session) => (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(session.id);
                          close();
                        }}
                        className="flex flex-col items-center px-4 py-2 rounded-lg text-white min-w-36 hover:bg-[#be73ed] transition duration-1000 ease-in-out cursor-pointer"
                        key={session.id}
                      >
                        <p className="flex items-center font-bold text-white">
                          {session.name_section.toUpperCase()}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              <div className="-mr-2 flex lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-6 text-gray-400 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <p className="pt-3 z-50 block h-8 w-12 ml-36 mb-8 text-white bold" aria-hidden="true">X</p>
                  ) : (
                    <img src={logoMenuIcon} alt='Menu Hamburguer' width={40} height={42} className='me-2' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="absolute top-0 right-0  w-1/2 h-full lg:hidden">
              <div className="space-y-1 h-screen">
                <ul className='flex flex-col bg-black/80 transition duration-600 ease-in-out w-full h-full pt-3'>
                  {sectionsLP.map((session) => (
                    <li onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(session.id)
                      close()
                    }}
                      className='flex justify-start items-center ps-6 py-4 h-16 transition duration-1000 ease-in-out' key={session.id}>
                      <p className='h-16 flex items-center font-bold text-white cursor-pointer max-w-20'>
                        {session.name_section.toUpperCase()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}