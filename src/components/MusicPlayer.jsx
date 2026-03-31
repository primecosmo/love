import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
}