import React from 'react';
import ReactPlayer from 'react-player';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const [playing, setPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.8);
  const [muted, setMuted] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleFullscreen = () => {
    const element = document.querySelector('.player-wrapper');
    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        element.requestFullscreen();
      }
    }
  };

  return (
    <div className="player-wrapper relative bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        ref={playerRef}
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing={playing}
        volume={volume}
        muted={muted}
        controls={false}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            className="text-white hover:text-blue-400 transition"
          >
            {playing ? <Pause size={24} /> : <Play size={24} />}
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleMute}
              className="text-white hover:text-blue-400 transition"
            >
              {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 accent-blue-500"
            />
          </div>

          <button
            onClick={handleFullscreen}
            className="text-white hover:text-blue-400 transition ml-auto"
          >
            <Maximize2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}