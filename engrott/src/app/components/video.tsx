"use client";
// VideoPlayer.tsx
import React, { useRef, useEffect, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface VideoPlayerOptions {
  controls: boolean;
  autoplay: boolean;
  preload: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
} 

interface VideoPlayerProps {
  options: VideoPlayerOptions;
}

const Video: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options);
    }
  }, [options]);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
    });

    // Listen for the video to be ready
    player.on ('loadeddata', () => setIsLoading(false));
    
  }, []);
  return (
    <>
      <style>
        {`
        .video-js {
          width : 100%;
          height: 45rem;
        }
          .video-js-loading{
           width: 100%;
            position: relative;
            background-color: #000;
            overflow: hidden;
           height:45rem;
           z-index: 10;
          }
        .video-js-palyer{
             width: 100%;
            position: relative;
            background-color: #000;
            overflow: hidden;
        }
        .video-container{
           width : 100%;
           height: 100%;
           }
        .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 100;
        }

        .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid #fff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        }

        @keyframes spin {
        to {
            transform: rotate(360deg);
        }
        }
        .videoloading{
        display: none;
        }
        @media (max-width:767px){
        .video-js-loading, .video-js{
        height: 20rem;
        }
        }
        `}
      </style>
      <div data-vjs-player className= {isLoading?  'video-js-loading':'video-js-palyer'}>
        {!videoError ? (
          <div className="video-container">
             {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
          )}
          <div className= {isLoading?  'videoloading':''}>
            <video ref={videoRef} poster= 'https://engro-xms-dev.engro.in/posterImage/672a00603503d00001f892d6.jpg' className="video-js vjs-big-play-centered" />
            </div>
          </div>
        ) : (
          <div className="fallback-video">
            <video
              className="fallback-video"
              controls
              width="640"
              height="264"
              preload="auto"
            >
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  );
};

export default Video;
