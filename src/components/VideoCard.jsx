import React from 'react';

const VideoCard = ({ video }) => {
  if (!video) return null;

  return (
    <div className="bg-[#232026] rounded-xl overflow-hidden w-80 search-item">
      <div className="h-44 w-full bg-gray-700 flex items-center justify-center">
        <img
          src={video.cover}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-xl font-semibold text-white mb-1">{video.title}</div>
        <div className="flex justify-between items-center text-sm text-gray-300">
          <span>{video.artist}</span>
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;