import Countdown from 'react-countdown';

export default function Timer({ color, miliseconds, showHours }: { color: string, miliseconds: number, showHours: boolean }) {
  return (
    <Countdown
      date={Date.now() + miliseconds}
      renderer={({ hours, minutes, seconds, completed }) =>
        completed ? (
          <span className={`text-${color}`}>0:00</span>
        ) : (
          <span className={`text-${color}`} >
            {showHours ? `${hours}:` : ''}{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </span>
        )
      }
    />
  );
}
