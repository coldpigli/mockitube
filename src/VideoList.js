import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    return (
        <div className = "ui relaxed list">
            {
            videos.map((video)=>{
                return <VideoItem video = {video}/>
            }
            )}
        </div>
    )
};

export default VideoList;
