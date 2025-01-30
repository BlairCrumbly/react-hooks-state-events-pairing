//! parent component to votes comment toggle
//! all video details
import video from "../data/video.js";
import CommentToggle from "./CommentToggle.js";
import Votes from './Votes.js'


const VideoContainer = () => {

    return(
        <div>
            <h3>{video.title}</h3>
            <p>{video.views} views | uploaded {video.createdAt}</p>
            
            <Votes upvotes = {video.upvotes} downvotes = {video.downvotes}/>
            <CommentToggle/>
            
        </div>

    )
    
}

export default VideoContainer