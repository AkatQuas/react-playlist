import { useEffect } from 'react';
import './Backdrop.css';

type BackdropProps = {
  activeColor: string;
  trackIndex: number;
  isPlaying: boolean;
};

export const Backdrop = ({
  activeColor,
  trackIndex,
  isPlaying,
}: BackdropProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-color', activeColor);
  }, [trackIndex, activeColor]);

  return (
    <div className={`color-backdrop ${isPlaying ? 'playing' : 'idle'}`}></div>
  );
};
