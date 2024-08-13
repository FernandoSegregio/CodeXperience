import code from './assets/CodeXperience.svg';
import '/index.css';

function App() {

  return (
    <div className='
    h-screen 
    flex 
    items-center 
    justify-center
    bg-black'
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <img src={code} alt="Logo codeXperience" className='w-[380px] md:w-[800px]' />
    </div>
  )
}

export default App
