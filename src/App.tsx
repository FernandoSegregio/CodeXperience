import Hero from '@components/Hero';
import '/index.css';
import { Countdown } from '@components/Countdown';
import Location from '@components/Location';
import { Footer } from '@components/Footer';
import Divider from '@components/Divider';

function App() {

  return (
    <div
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <Hero />
      <Countdown />
      <Location />
      <Divider />
      <Footer />
    </div>
  )
}

export default App
