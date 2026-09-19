import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

export default function TopNotificationBar() {
  const [currentDate, setCurrentDate] = useState(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      setCurrentDate(`${day}/${month}/${year}`);
    };
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="top-notification-bar"
      className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white py-2.5 px-3 sm:px-4 sticky top-0 z-50 shadow-md border-b border-pink-400/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-base font-black tracking-wide">
        <span className="flex items-center justify-center p-1 rounded-full bg-white/20 animate-pulse">
          <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300" />
        </span>
        <span className="uppercase text-white tracking-wider">
          OFERTA ATÉ HOJE <span className="text-yellow-300 underline decoration-yellow-300 decoration-2 underline-offset-4">{currentDate}</span>
        </span>
      </div>
    </div>
  );
}

