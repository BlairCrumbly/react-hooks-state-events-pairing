//! child of video container
//! needs access to comments via props 
//! state: bool active/inactive
import Comments from './Comments'

const CommentToggle = () => {
    return(
      <div>
          <p>Comment Toggle</p>
          <Comments/>
      </div>

    );
};


export default CommentToggle






