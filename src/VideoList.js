import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    return (
        <div className = "ui relaxed list">
            {
            videos.map((video)=>{
                return <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/>
            }
            )}
        </div>
    )
};

export default VideoList;
