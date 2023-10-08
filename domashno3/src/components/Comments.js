import PropTypes from "prop-types";
import { clickLike } from "./CommentsClass"

export function Comments(props) {
    return(
        <>
         <table border={1}>
            <thead>
             <tr>
                <th>UserID</th>
                <th>Author</th>
                <th>Text</th>
                <th>Likes</th>
             </tr>    
            </thead>
            <tbody>
                {props.comments.map((comment, index) => (
                  <tr key={index}>
                    <td>{comment.userId}</td>
                    <td>{comment.author}</td>
                    <td>{comment.text}</td>
                    <td><button onClick={clickLike}>Like</button></td>
                  </tr>
                ))}
            </tbody>
         </table>
        </>
    );
};

Comments.propTypes ={
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Comments.defaultProps = {
    comment: [{userId: "None ID", author: "None author", text: "Not comment"}],
};