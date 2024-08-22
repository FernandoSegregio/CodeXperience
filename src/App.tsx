import { Countdown } from '@components/Countdown';
import Divider from '@components/Divider';
import { Footer } from '@components/Footer';
import Hero from '@components/Hero';
import Location from '@components/Location';
import Partners from '@components/Partners';
import Talks from '@components/talks';
import '/index.css';

function App() {

  return (
    <div
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <Hero />
      <Countdown />
      <Talks />
      <Location />
      <Divider />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
