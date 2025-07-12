import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import "../assets/styles/MusicPlayer.css";
import data from "../data";
import { useMusic } from "../context/MusicContext";
import { findArtistById } from "../utils/dataProcessor";

const MusicPlayer = ({ isPlaying, setIsPlaying }) => {
  const { currentTrack, setCurrentTrack } = useMusic();

  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null);

  const allTracks = data.songs;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      progressBarRef.current.style.width = `${progress}%`;
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.clientWidth;
    const clickPercentage = clickPosition / progressBarWidth;
    const newTime = clickPercentage * audioRef.current.duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
    if (newVolume > 0 && isMuted) setIsMuted(false);
  };

  const toggleMute = () => {
    audioRef.current.volume = isMuted ? volume / 100 : 0;
    setIsMuted(!isMuted);
  };

  const handleSongEnd = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      handleNext();
    }
  };

  const currentIndex = allTracks.findIndex(
    (track) => track.id === currentTrack?.id
  );

  const handleNext = () => {
    let nextIndex;
    if (isShuffle) {
      do {
        nextIndex = Math.floor(Math.random() * allTracks.length);
      } while (nextIndex === currentIndex && allTracks.length > 1);
    } else {
      nextIndex = (currentIndex + 1) % allTracks.length;
    }
    setCurrentTrack(allTracks[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + allTracks.length) % allTracks.length;
    setCurrentTrack(allTracks[prevIndex]);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.src = currentTrack.src;
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Audio play failed:", error);
        });
      }
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  const artistObj = currentTrack.artistId
    ? findArtistById(currentTrack.artistId)
    : null;

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onEnded={handleSongEnd}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
      />

      <div className="track-info">
        {currentTrack.cover ? (
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="track-cover"
          />
        ) : (
          <div className="track-cover-placeholder">
            <IoMdMusicalNote size={24} />
          </div>
        )}
        <div className="track-details">
          <h4 className="track-title">{currentTrack.title}</h4>
          <p className="track-artist">
            {artistObj ? artistObj.name : "Unknown Artist"}
          </p>
        </div>
      </div>

      <div className="player-controls">
        <div className="progress-container" onClick={handleProgressClick}>
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="controls">
          <button
            className={`control-btn ${isShuffle ? "active" : ""}`}
            onClick={() => setIsShuffle(!isShuffle)}
            title="Shuffle"
          >
            <FaRandom />
          </button>

          <button
            className="control-btn"
            onClick={handlePrevious}
            title="Previous"
          >
            <FaStepBackward />
          </button>

          <button className="play-btn" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button className="control-btn" onClick={handleNext} title="Next">
            <FaStepForward />
          </button>

          <button
            className={`control-btn ${isRepeat ? "active" : ""}`}
            onClick={() => setIsRepeat(!isRepeat)}
            title="Repeat"
          >
            <FaRedo />
          </button>
        </div>
      </div>

      <div className="volume-control">
        <button className="volume-btn" onClick={toggleMute}>
          {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          ref={volumeBarRef}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
