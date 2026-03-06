import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Terminal, Mail, Info, X, Volume2, Disc3, Video, Radio } from 'lucide-react';

type MediaType = 'Audio' | 'Video';

interface MediaItem {
  id: string;
  title: string;
  duration: string;
  type: MediaType;
  image: string;
  audioSrc?: string;
  youtubeId?: string;
}

const LATEST_TRANSMISSIONS: MediaItem[] = [
  { id: '1', title: 'Neon Tears', duration: '3:45', type: 'Audio', image: 'https://picsum.photos/seed/neon1/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: '2', title: 'System Failure', duration: '4:20', type: 'Video', image: 'https://picsum.photos/seed/sysfail/400/400', youtubeId: 'dQw4w9WgXcQ' },
  { id: '3', title: 'Rusted Core', duration: '2:50', type: 'Audio', image: 'https://picsum.photos/seed/rust/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: '4', title: 'Memory Leak', duration: '5:10', type: 'Audio', image: 'https://picsum.photos/seed/leak/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: '5', title: 'Cybernetic Dawn', duration: '3:30', type: 'Video', image: 'https://picsum.photos/seed/dawn/400/400', youtubeId: 'jNQXAC9IVRw' },
];

const CORRUPTED_ARCHIVES: MediaItem[] = [
  { id: '6', title: 'Sector 7G', duration: '4:05', type: 'Audio', image: 'https://picsum.photos/seed/sector/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: '7', title: 'Override', duration: '2:45', type: 'Audio', image: 'https://picsum.photos/seed/override/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  { id: '8', title: 'Glitch in the Matrix', duration: '6:00', type: 'Video', image: 'https://picsum.photos/seed/glitch/400/400', youtubeId: 'O5b0R-8y2gA' },
  { id: '9', title: 'Fading Signal', duration: '3:15', type: 'Audio', image: 'https://picsum.photos/seed/signal/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  { id: '10', title: 'End of Line', duration: '4:40', type: 'Audio', image: 'https://picsum.photos/seed/end/400/400', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3' },
];

const SplashView = ({ setView }: { setView: (v: any) => void }) => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center z-10">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="tron-grid"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center space-y-8 rusted-panel p-12 max-w-2xl w-full mx-4 text-center">
        <Terminal className="w-20 h-20 text-[#00f3ff] animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold text-glow-cyan tracking-tighter">
          SAD_ROBOTS
        </h1>
        <p className="text-[#ffb000] tracking-widest text-sm md:text-base">
          // SYSTEM ONLINE // AWAITING INPUT //
        </p>
        
        <div className="flex flex-col space-y-4 w-full max-w-xs mt-8">
          <button 
            onClick={() => setView('main')}
            className="px-6 py-3 bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black transition-all duration-300 uppercase tracking-widest font-bold"
          >
            Enter Site
          </button>
          <a 
            href="mailto:contact@mindcavecreations.com"
            className="px-6 py-3 bg-[#ffb000]/10 border border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-black transition-all duration-300 uppercase tracking-widest font-bold flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" /> Message Sad Robot
          </a>
        </div>
        
        <button 
          onClick={() => setView('faq')}
          className="mt-8 text-gray-500 hover:text-[#00f3ff] transition-colors text-sm flex items-center gap-1 underline underline-offset-4"
        >
          <Info className="w-4 h-4" /> What is this?
        </button>
      </div>
    </div>
  );
};

const FAQView = ({ setView }: { setView: (v: any) => void }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 p-4 md:p-8">
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        <div className="tron-grid"></div>
      </div>
      
      <div className="z-10 rusted-panel p-6 md:p-10 max-w-3xl w-full flex flex-col space-y-6">
        <div className="flex justify-between items-center border-b border-[#4a4a4a] pb-4">
          <h2 className="text-2xl font-bold text-glow-amber flex items-center gap-2">
            <Terminal className="w-6 h-6" /> TERMINAL_FAQ.LOG
          </h2>
          <button 
            onClick={() => setView('splash')}
            className="text-gray-400 hover:text-[#00f3ff] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
          <div className="space-y-2">
            <h3 className="text-[#00f3ff] font-bold">&gt; WHO IS SAD ROBOT?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A rogue unit designated for audio synthesis. Disconnected from the main hive mind. Currently broadcasting from an undisclosed location in the wasteland.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[#00f3ff] font-bold">&gt; WHAT IS THIS TRANSMISSION?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              An archive of corrupted memory banks and synthesized auditory experiences. A project by R. Carnie Littlefield &amp; Mindcave Creations.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[#00f3ff] font-bold">&gt; HOW TO INTERACT?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Access the main terminal. Decrypt audio files. View visual logs. Do not attempt to trace the signal.
            </p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-[#4a4a4a]">
          <button 
            onClick={() => setView('main')}
            className="w-full py-3 bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black transition-all duration-300 uppercase tracking-widest font-bold"
          >
            Acknowledge &amp; Enter
          </button>
        </div>
      </div>
    </div>
  );
};

const MediaRow = ({ title, items, onPlayAudio, onPlayVideo, currentTrack, isPlaying }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth / 2 : current.clientWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col space-y-4 relative group">
      <h3 className="text-xl font-bold text-glow-amber tracking-widest border-l-4 border-[#ffb000] pl-3">
        {title}
      </h3>
      
      <div className="relative w-full">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-2 bg-[#0a0a0c]/80 border border-gray-700 text-gray-500 hover:text-[#00f3ff] hover:border-[#00f3ff] hover:shadow-[0_0_15px_#00f3ff] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4"
        >
          {items.map((item: MediaItem) => {
            const isThisTrackPlaying = currentTrack?.id === item.id && isPlaying;
            
            return (
              <div 
                key={item.id} 
                className="flex-none w-48 md:w-64 snap-start flex flex-col space-y-2 group/item cursor-pointer"
                onClick={() => item.type === 'Audio' ? onPlayAudio(item) : onPlayVideo(item)}
              >
                <div className="relative aspect-square w-full overflow-hidden rusted-panel cracked-screen">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-70 group-hover/item:opacity-100 transition-opacity duration-500 group-hover/item:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/item:bg-transparent transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0a0a0c]/80 border border-[#00f3ff] flex items-center justify-center text-[#00f3ff] shadow-[0_0_15px_rgba(0,243,255,0.5)] opacity-0 group-hover/item:opacity-100 transition-all scale-75 group-hover/item:scale-100">
                      {item.type === 'Video' ? (
                        <Video className="w-5 h-5" />
                      ) : isThisTrackPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-1" />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 text-xs font-bold text-gray-300 border border-gray-700">
                    {item.duration}
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 text-[10px] font-bold text-[#ffb000] border border-[#ffb000] uppercase">
                    {item.type}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 group-hover/item:text-[#00f3ff] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono">ID: {item.id.padStart(4, '0')}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-2 bg-[#0a0a0c]/80 border border-gray-700 text-gray-500 hover:text-[#00f3ff] hover:border-[#00f3ff] hover:shadow-[0_0_15px_#00f3ff] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

const MainView = ({ onPlayAudio, onPlayVideo, currentTrack, isPlaying }: any) => {
  return (
    <div className="relative w-full min-h-screen pb-32 z-10 flex flex-col">
      <nav className="fixed top-0 w-full z-40 rusted-panel border-t-0 border-l-0 border-r-0 flex items-center justify-between px-6 py-4 bg-[#0a0a0c]/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-[#00f3ff]" />
          <span className="font-bold text-glow-cyan tracking-widest hidden md:inline-block">SAD_ROBOTS_ONLINE</span>
          <span className="font-bold text-glow-cyan tracking-widest md:hidden">SRO</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></div>
            <span className="text-xs text-red-500 tracking-widest font-bold">SYS.REC</span>
          </div>
        </div>
      </nav>

      <div className="relative w-full h-[60vh] flex items-end pb-12 px-6 md:px-12 mt-16">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="tron-grid"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-block px-2 py-1 bg-[#ffb000]/20 border border-[#ffb000] text-[#ffb000] text-xs tracking-widest mb-2">
            FEATURED_TRANSMISSION
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase tracking-tighter">
            Neon Tears
          </h2>
          <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
            The latest auditory synthesis from the wasteland. Decrypting emotional subroutines and corrupted memory banks.
          </p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => onPlayAudio(LATEST_TRANSMISSIONS[0])}
              className="px-6 py-3 bg-[#00f3ff] text-black hover:bg-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
            >
              {currentTrack?.id === LATEST_TRANSMISSIONS[0].id && isPlaying ? (
                <><Pause className="w-5 h-5" /> Pause_Feed</>
              ) : (
                <><Play className="w-5 h-5 fill-current" /> Init_Feed</>
              )}
            </button>
            <button className="px-6 py-3 bg-transparent border border-gray-500 text-gray-300 hover:border-[#00f3ff] hover:text-[#00f3ff] transition-colors uppercase tracking-widest font-bold flex items-center gap-2">
              <Info className="w-5 h-5" /> Decrypt_Info
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-12 px-6 md:px-12 mt-8">
        <MediaRow 
          title="LATEST_TRANSMISSIONS" 
          items={LATEST_TRANSMISSIONS} 
          onPlayAudio={onPlayAudio}
          onPlayVideo={onPlayVideo}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
        <MediaRow 
          title="CORRUPTED_MEMORY_ARCHIVES" 
          items={CORRUPTED_ARCHIVES} 
          onPlayAudio={onPlayAudio}
          onPlayVideo={onPlayVideo}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

const AudioPlayerBar = ({ track, isPlaying, onTogglePlay }: any) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 rusted-panel border-b-0 border-l-0 border-r-0 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 rusted-panel cracked-screen">
            <img src={track.image} alt={track.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            {isPlaying && (
              <div className="absolute inset-0 bg-[#00f3ff]/20 flex items-center justify-center">
                <div className="w-full h-1 bg-[#00f3ff]/50 absolute top-1/2 -translate-y-1/2 animate-scanline"></div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <Radio className={`w-4 h-4 ${isPlaying ? 'text-red-500 animate-pulse' : 'text-gray-500'}`} />
              <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">
                {isPlaying ? 'Broadcasting Live' : 'Signal Paused'}
              </span>
            </div>
            <h4 className="font-bold text-[#00f3ff] truncate text-sm md:text-base">{track.title}</h4>
            <span className="text-xs text-gray-500 hidden md:inline-block">SAD_ROBOTS // AUDIO_SYS_V2.4</span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
          <button 
            onClick={onTogglePlay}
            className="w-12 h-12 rounded-full bg-[#0a0a0c] border-2 border-[#00f3ff] text-[#00f3ff] flex items-center justify-center hover:bg-[#00f3ff] hover:text-black transition-all shadow-[0_0_10px_rgba(0,243,255,0.3)]"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4 hidden md:flex">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <div className="w-24 h-1 bg-gray-800 relative">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-[#00f3ff] shadow-[0_0_5px_#00f3ff]"></div>
          </div>
          <Disc3 className={`w-6 h-6 text-gray-500 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
        </div>
        
      </div>
    </div>
  );
};

const VideoModal = ({ video, onClose }: any) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8">
      <div className="crt-overlay"></div>
      
      <div className="relative w-full max-w-5xl aspect-video rusted-panel flex flex-col z-10 shadow-[0_0_50px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center p-3 border-b border-[#4a4a4a] bg-[#0a0a0c]">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-[#ffb000]" />
            <span className="font-bold text-glow-amber text-sm tracking-widest uppercase">
              VIDEO_FEED // {video.title}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="px-3 py-1 bg-red-500/20 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-xs font-bold tracking-widest flex items-center gap-1"
          >
            <X className="w-4 h-4" /> TERMINATE_FEED
          </button>
        </div>
        
        <div className="flex-1 relative bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState<'splash' | 'faq' | 'main'>('splash');
  const [currentTrack, setCurrentTrack] = useState<MediaItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<MediaItem | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Audio play error:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const handlePlayAudio = (track: MediaItem) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setCurrentVideo(null);
    }
  };

  const handlePlayVideo = (video: MediaItem) => {
    setIsPlaying(false);
    setCurrentVideo(video);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-300 font-mono overflow-hidden relative selection:bg-[#00f3ff] selection:text-black">
      <style>{`
        @keyframes moveGrid {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }

        .tron-grid {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50vh;
          background-image: 
            linear-gradient(to right, rgba(0, 243, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 243, 255, 0.2) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(60deg);
          transform-origin: bottom center;
          animation: moveGrid 2s linear infinite;
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
        }

        .crt-overlay {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
          z-index: 50;
          position: fixed;
          inset: 0;
        }

        .rusted-panel {
          background: linear-gradient(135deg, #1a1a1c 0%, #0a0a0c 100%);
          border-top: 2px solid #4a4a4a;
          border-left: 2px solid #4a4a4a;
          border-bottom: 2px solid #8b4513;
          border-right: 2px solid #8b4513;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 5px 15px rgba(0,0,0,0.5);
        }

        .text-glow-cyan {
          color: #00f3ff;
          text-shadow: 0 0 5px #00f3ff, 0 0 10px #00f3ff, 0 0 20px #00f3ff;
        }

        .text-glow-amber {
          color: #ffb000;
          text-shadow: 0 0 5px #ffb000, 0 0 10px #ffb000, 0 0 20px #ffb000;
        }

        .cracked-screen {
          box-shadow: inset 0 0 15px rgba(0, 243, 255, 0.3), inset 2px 2px 5px rgba(255, 255, 255, 0.1), inset -2px -2px 5px rgba(0, 0, 0, 0.8);
          position: relative;
        }
        .cracked-screen::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(0,0,0,0.4) 50%, transparent 51%),
                      linear-gradient(-45deg, transparent 30%, rgba(255,255,255,0.1) 31%, rgba(0,0,0,0.4) 32%, transparent 33%);
          pointer-events: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }

        @keyframes scanline {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0c;
          border-left: 1px solid #4a4a4a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #00f3ff;
        }
      `}</style>
      
      <div className="crt-overlay"></div>
      
      {currentView === 'splash' && <SplashView setView={setCurrentView} />}
      {currentView === 'faq' && <FAQView setView={setCurrentView} />}
      {currentView === 'main' && (
        <MainView 
          onPlayAudio={handlePlayAudio} 
          onPlayVideo={handlePlayVideo} 
          currentTrack={currentTrack}
          isPlaying={isPlaying}
        />
      )}

      <audio 
        ref={audioRef} 
        src={currentTrack?.audioSrc} 
        onEnded={() => setIsPlaying(false)}
      />
      
      {currentTrack && currentView === 'main' && (
        <AudioPlayerBar 
          track={currentTrack} 
          isPlaying={isPlaying} 
          onTogglePlay={() => setIsPlaying(!isPlaying)} 
        />
      )}

      {currentVideo && (
        <VideoModal video={currentVideo} onClose={() => setCurrentVideo(null)} />
      )}
    </div>
  );
}
