//! child to video containeer
//! needs access to prop upvotes and downvotes\
//! state in int likecounter / int dislikecounter 


const Votes = ({upvotes, downvotes}) => {
    return(
        <div>
            <button>{upvotes}&#128077;</button>
            <button>{downvotes}&#128078;</button>
        </div>
    );
};

export default Votes