import React, { FunctionComponent } from 'react';
import TheTitle from './TheTitle';

interface TheVideoPlayerProps {
  videoId: string; // ID видео на YouTube
}

const TheVideoPlayer: FunctionComponent<TheVideoPlayerProps> = ({ videoId }) => {
  return (
    <div>
      <TheTitle title="Har bir tarifda nimalar beriladi?" />
      <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default TheVideoPlayer;
