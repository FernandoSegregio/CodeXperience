import Hero from '@components/Hero';
import '/index.css';
import { Countdown } from '@components/Countdown';
import Location from '@components/Location';

function App() {

  return (
    <div
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <Hero />
      <div className="relative h-48 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <Countdown />
        </div>
      </div>
      <Location />
    </div>
  )
}

export default App
