import React from "react";

export function clickLike(){
    console.log("+1");
};

export class CommentsClass extends React.Component{
    render() {
        return(
            <> <table border={1}>
                 <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Author</th>
                        <th>Text</th>
                        <th>Likes</th>
                    </tr>
                 </thead>
                 <tbody>
                    {this.props.comments.map((comment, index) =>(
                        <tr key={index}>
                            <td>{comment.userId}</td>
                            <td>{comment.author}</td>
                            <td>{comment.text}</td>
                            <td>
                                <button onClick={clickLike}>Like</button>
                            </td>
                        </tr>
                    ))}
                 </tbody>
               </table> 
            </>
        );
    };
};