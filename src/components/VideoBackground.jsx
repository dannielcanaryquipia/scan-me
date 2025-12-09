import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import backgroundVideo from '../assets/videos/background-video.mp4';
import './VideoBackground.css';

const VideoBackground = ({ children }) => {
  const { theme } = useTheme();
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log('Video can play');
      video.play().catch(error => {
        console.error('Video play failed:', error);
        setVideoError(true);
      });
    };

    const handleError = (e) => {
      console.error('Video error:', e);
      setVideoError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Try to load the video
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (videoError) {
    console.error('Error loading video at path:', backgroundVideo);
  }

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        className="video-background__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={backgroundVideo} type="video/mp4" />
        {videoError && (
          <div className="video-fallback">
            <p>Unable to load video. Please check the console for errors.</p>
          </div>
        )}
      </video>
      <div className={`video-background__overlay ${theme}`}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
