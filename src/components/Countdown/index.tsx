import { useEffect, useState } from 'react';

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date('2025-11-29T00:00:00'); // Data do evento
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    let days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { months, days, hours, minutes, seconds };
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 md:h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 overflow-hidden">
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-70"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="absolute flex space-x-4 p-4">
          <div className='flex flex-col gap-4 md:gap-0 md:space-x-4 md:flex-row'>
            <div className='flex space-x-4'>
              <div className="flex flex-col items-center bg-black bg-opacity-10 p-8 rounded-3xl text-white w-36">
                <span className="text-5xl font-bold">{formatNumber(timeLeft.months)}</span>
                <span>{timeLeft.months !== 1 ? 'Meses' : 'Mês'}</span>
              </div>
              <div className="flex flex-col items-center bg-black bg-opacity-10 p-8 rounded-3xl text-white w-36">
                <span className="text-5xl font-bold">{formatNumber(timeLeft.days)}</span>
                <span>Dia{timeLeft.days !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <div className='flex space-x-4'>
              <div className="flex flex-col items-center bg-black bg-opacity-10 p-8 rounded-3xl text-white w-36">
                <span className="text-5xl font-bold">{formatNumber(timeLeft.hours)}</span>
                <span>Hora{timeLeft.hours !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex flex-col items-center bg-black bg-opacity-10 p-8 rounded-3xl text-white w-36">
                <span className="text-5xl font-bold">{formatNumber(timeLeft.minutes)}</span>
                <span>Minuto{timeLeft.minutes !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
          <div className="flex-col items-center bg-black bg-opacity-10 p-8 rounded-3xl text-white w-36 hidden lg:flex">
            <span className="text-5xl font-bold">{formatNumber(timeLeft.seconds)}</span>
            <span>Segundo{timeLeft.seconds !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;