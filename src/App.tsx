import React from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { Playlist } from './components/Playlist';
import { MonitorPlay } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "Big Buck Bunny",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop&q=60",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 2,
    title: "Elephant Dream",
    thumbnail: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=60",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Sintel",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  }
];

function App() {
  const [currentVideo, setCurrentVideo] = React.useState(videos[0]);

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <MonitorPlay size={32} className="text-blue-500" />
            <h1 className="text-2xl font-bold text-white">ReactStream</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video">
              <VideoPlayer url={currentVideo.url} />
            </div>
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-white">{currentVideo.title}</h1>
            </div>
          </div>
          
          <div>
            <Playlist
              videos={videos}
              currentVideo={currentVideo}
              onVideoSelect={setCurrentVideo}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;