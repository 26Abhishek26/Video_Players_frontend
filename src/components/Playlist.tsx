import React from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
}

interface PlaylistProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
  currentVideo: Video;
}

export function Playlist({ videos, onVideoSelect, currentVideo }: PlaylistProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Playlist</h2>
      <div className="space-y-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition
              ${video.id === currentVideo.id ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
            onClick={() => onVideoSelect(video)}
          >
            <div className="relative w-32 h-20 rounded-md overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="object-cover w-full h-full"
              />
              {video.id === currentVideo.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Play className="text-white" size={24} />
                </div>
              )}
            </div>
            <p className="text-white font-medium flex-1">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}