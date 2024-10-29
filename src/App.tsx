import Countdown from '@components/Countdown';
import Divider from '@components/Divider';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Location from '@components/Location';
import Partners from '@components/Partners';
import Talks from '@components/talks';
import '/index.css';
import Pass from '@components/Pass';
import Parallax from '@components/Parallax';
import ScheduleTable from '@components/Schedule';

function App() { 

  console.log(
    '%c<< %cCodeXperience %c>>',
    'font-size: 24px; color: #75fbfd; font-weight: bold;',
    'font-size: 24px; color: #be73ed; font-weight: bold;', 
    'font-size: 24px; color: #75fbfd; font-weight: bold;'
  );

  return (
    <div
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <Hero />
      <Countdown />
      <Talks />
      <ScheduleTable />
      <Parallax />
      <Location />
      <Divider height={1} />
      <Pass />
      <Divider height={5} />
      <Partners />
      <Divider height={1} />
      <Footer />
    </div>

  )
}

export default App
